var express = require('express');
var router = express.Router();
var Reclamation =require('../models/Reclamation');
'use strict';
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');


var selfSignedConfig = {
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
        user: 'mahdi.benromdhane@esprit.tn',
        pass: 'mahdi24644260'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(selfSignedConfig);


router.get('/', function(req, res) {
    Reclamation.find(function (err,reclamation) {
        if(err)
            return res.json(err);
        res.json(reclamation);
    })
});
router.post('/', function (req, res) {

        var reclamation = new Reclamation({
            responseType:req.body.responseType,
    subject:req.body.subject,
            Email:req.body.Email,
            Content:req.body.Content


        });




        Reclamation.createReclamation(reclamation, function (err,reclamation) {
            if (err) {
                console.log(err);
                res.status(400).json(err);
            }
            res.send("req Created");

        });

});
router.post('/response', function (req, res) {




    var mailOptions = {
        from: 'mahdi.benromdhane@esprit.tn', // sender address
        to: req.body.Email, // list of receivers
        subject: 'response to your reclamation', // Subject line
        html: req.body.Content
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json("Error sending mail" + error);
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);


    })
});



module.exports=router;

