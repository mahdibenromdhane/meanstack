var express = require('express');
var router = express.Router();

var Sujet=require('../models/Sujet');

/* GET users listing. */
router.get('/', function(req, res) {
    Sujet.find(function (err,sujets) {
        if(err)
            return res.json(err);
        res.json(sujets);
    })
});

router.post('/add/:id', function (req,res) {
    var sujet = new Sujet();
    var maintenant=new Date();
    sujet.titre = req.body.titre;
    sujet.description = req.body.description;
    sujet.idForum=req.params.id;
    sujet.date=maintenant;
    sujet.idUser=1;
    sujet.save(sujet,function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Sujet created!' });
    });
});
router.put('/:id', function(req,res,next){
    Sujet.findByIdAndUpdate(
        req.params.id,
        {$set: {libelle:"tt"}},
        {new: true},
        function(err,user){
            if(err){
                res.json({error :err}) ;
            } else{
                res.send(user) ;
            }
        });
});

router.get('/:id',function(req, res) {

    Sujet.find({"idForum":req.params.id}, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});






router.delete('/:id',function(req, res) {
    Sujet.remove({
        _id: req.params.id
    }, function(err, sujet) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports=router;