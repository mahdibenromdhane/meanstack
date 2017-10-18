var express = require('express');
var router = express.Router();
var multer  = require('multer');
var crypto = require('crypto');
var path = require('path');
var storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});
var upload = multer({ storage: storage });
var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
    if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/signin');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/signin', function(req, res) {
    	// Display the Login page with any flash message, if any
		//res.render('index', { message: req.flash('message') });
                //console.log("login");
                 res.render('login', { message: req.flash('message') });
                
	});
        	router.get('/admin', function(req, res) {
    	// Display the Login page with any flash message, if any
		//res.render('index', { message: req.flash('message') });
                //console.log("login");
                 res.render('admin', { message: req.flash('message') });
                
	});
        router.post('/admin', passport.authenticate('admin', {
		successRedirect: '/#/admin',
		failureRedirect: '/admin',
		failureFlash : true  
	}));
        /* GET login page. */
	router.get('/reset', function(req, res) {
    	// Display the Login page with any flash message, if any
		//res.render('index', { message: req.flash('message') });
                //console.log("login");
               res.render('reset', { message: req.flash('message') });
                
	});
        router.post('/reset', passport.authenticate('reset', {
		successRedirect: '/signin',
		failureRedirect: '/reset',
		failureFlash : true  
	}));
        	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/#/home',
		failureRedirect: '/signin',
		failureFlash : true  
	}));



	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register', { message: req.flash('message') });
	});

	/* Handle Registration POST */
	router.post('/signup',upload.single('image'), passport.authenticate('signup', {
		successRedirect: '/#/home',
		failureRedirect: '/signup',
		failureFlash : true
	}));
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/signin');
	});
        
        router.get('/getuser', function(req, res) {
		 return res.send(req.user);
	});
        
        router.all('/api/*', function(req, res, next){
return null;
});

	/* GET Home Page */
	router.get('/*', isAuthenticated, function(req, res){
            console.log(req.user.username);
            if (req.user.username == "admin") {
  res.sendFile(__dirname + '/public/admin.html');
} else {
  res.sendFile(__dirname + '/public/home.html');
}
		console.log(req.originalUrl);
               
                
	});


	/* Handle Logout */

        
        
	return router;
}