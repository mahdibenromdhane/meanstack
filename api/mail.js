/**
 * Created by Mahdi on 27/04/2017.
 */
'use strict';
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');


var express = require('express');
var router = express.Router();

//Get quiz from session


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

router.post("/", function (req, res, next) {
    console.log(req.body);








        //req.session.quiz.object
        //req.session.quiz.contact


        var mailOptions = {
            from: 'mahdi.benromdhane@esprit.tn', // sender address
            to: 'mahdi.benromdhane@esprit.tn', // list of receivers
            subject: 'Notification de ' + req.body.username, // Subject line
            html: '<b>Un profil (' + req.body.username + ') a besoin de vos services de bricolage</b><br/>' +
            '<b>Object:</b> ' + req.body.message + "<br/>" +
            '<b>Veuillez me contacter:</b> ' + req.body.info
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json("Error sending mail" + error);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);

            res.json("OK");
        });

});

/*/* GET users listing.
router.get('/', function (req, res, next) {

    Users.findById(req.query.id, function (err, user) {
        console.log(user);

        //req.session.quiz.object
        //req.session.quiz.contact


        var mailOptions = {
            from: 'seifeddine.chakroun@esprit.tn', // sender address
            to: user.email, // list of receivers
            subject: 'Notification', // Subject line
            html: '<b>Un profil a besoin de vos services de bricolage</b><br/>' +
            '<b>Object:</b> ' + mockQuiz.object + "<br/>" +
            '<b>Veuillez me contacter:</b> ' + mockQuiz.userContact
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json("Error sending mail" + error);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);

            res.json("Mail sent successfully");
        });
    });
}); */

module.exports = router;