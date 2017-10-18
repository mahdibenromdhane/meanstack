var express = require('express');
var router = express.Router();

var Forum=require('../models/Forum');

/* GET users listing. */
router.get('/', function(req, res) {
    Forum.find(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.get('/:id',function(req, res) {
    Forum.findById(req.params.id, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});




/*
router.post('/:id', function (req, res) {

    var sujets = {id: "15", description: "desc",titre:"tit"};




        Forum.findByIdAndUpdate(req.params.id, {$push: {"sujets": sujets}}, function (err, res) {
            if (err)
                return res.status(404).send(err);
        });

    res.json({ message: 'Pushed!' });

});
*/
module.exports=router;