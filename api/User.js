
var express = require('express');
var bcrypt=require('bcrypt-nodejs');
var router = express.Router();

var jwt =require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res) {
    User.find(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.post('/register', function (req,res) {
    User= new User({
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    });
    User.save(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.post('/login', function (req,res) {
    User.findOne({email:req.body.email},function (err,users) {
        if(err){
            res.send("erreur");
        }
        //user not found
        if(!users)
            return res.status(404).send("not found");
        //user found
        //cas 1:autorisé

        if(bcrypt.compareSync(req.body.password, users.password)) {
            //generate token jwt

            var token=jwt.sign(req.body.email,"secret");

            return res.json({
                "message":"authorized",
                "token":token

            })
            //return res.send("authorized");

        }
        else {

            return res.status(401).send("non authorized");
        }


    })
});
module.exports=router;