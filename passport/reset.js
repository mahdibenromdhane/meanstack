var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/User');
var bCrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'powerx.contact@gmail.com',
        pass: 'Azer12345@#'
    }
});

// setup email data with unicode symbols

module.exports = function(passport){

	passport.use('reset', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            updateUser = function(){
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log(user);
                        var x=Math.floor((Math.random() * 999999) + 10000);
                        user.password = createHash(x);
                        let mailOptions = {
    from: '"Power X Contact 👻" <powerx.contact@gmail.com>', // sender address
    to: 'themegamind.777@gmail.com', // list of receivers
    subject: 'Reset Password ✔', // Subject line
    text: 'Hello '+user.firstName+"\nYour Password is "+x+"\nFeel free to change in anytime under your account setting" // plain text body
   
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
                        console.log(x);
                        user.save(function(err) {
                            if (err){
                                console.log('Error in reseting password: '+err);  
                                throw err;  
                            }
                            
                            
                        });
                        console.log('Reset mail sent: '+username);
                        return done(null, false, req.flash('message','Reset mail sent'));
                    } else {

                            console.log('No user with this mail exist');    
                            return done(null, false, req.flash('message','No user with this mail exist'));
                        
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(updateUser);
        })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}