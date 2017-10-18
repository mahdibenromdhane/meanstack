var express = require('express');
var router = express.Router();

var Like=require('../models/Like');

/* GET users listing. */
router.get('/', function(req, res) {
    Like.find(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.get('/:id',function(req, res) {
    Like.count({idUser:req.params.id}, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});

router.post('/add/:id', function (req,res) {
   var  like= new Like();
   like.idUser=1;
   like.idSujet=req.params.id;
    like.save(function (err,likes) {
        if(err)
            return res.json(err);
        res.json(likes);
    })
});
router.delete('/:id',function(req, res) {
    Like.remove({
        idSujet: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
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