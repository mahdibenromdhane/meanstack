
var express = require('express');
var bcrypt=require('bcrypt-nodejs');
var router = express.Router();

var Stat=require('../models/Statistic');

/* GET users listing. */
router.get('/', function(req, res) {
    Stat.find(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});


module.exports=router;