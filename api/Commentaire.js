var express = require('express');
var router = express.Router();

var Commentaire=require('../models/Commentaire');

/* GET users listing. */
router.get('/', function(req, res) {
    Commentaire.find(function (err,sujets) {
        if(err)
            return res.json(err);
        res.json(sujets);
    })
});

router.post('/add/:id', function (req,res) {
    var commentaire = new Commentaire();
    var maintenant=new Date();
    commentaire.titre = req.body.titre;
    commentaire.description = req.body.description;
    commentaire.idSujet=req.params.id;
    commentaire.idUser=1;
    commentaire.date=maintenant;
    commentaire.save(commentaire,function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Commentaire created!' });
    });
});
router.get('/count/:id',function(req, res) {
    Commentaire.count({idSujet:req.params.id}, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});
router.get('/:id',function(req, res) {

    Commentaire.find({"idSujet":req.params.id}, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
});
router.delete('/:id',function(req, res) {
    Commentaire.remove({
        _id: req.params.id
    }, function(err, commentaire) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});
module.exports=router;

