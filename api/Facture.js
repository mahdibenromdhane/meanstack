
var express = require('express');
var bcrypt=require('bcrypt-nodejs');
var router = express.Router();

var Facture=require('../models/Facture');
var jwt =require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res) {
    Facture.find(function (err,users) {
        if(err)
            return res.json(err);

        res.json(users);

    })
});

router.post('/add', function (req, res) {

    var facture = new Facture(req.body);
    facture.name = req.body.name;
    facture.montant = req.body.montant;
    // save the bear and check for errors
    facture.save(facture,function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Facture created!' });
    });

});
module.exports=router;