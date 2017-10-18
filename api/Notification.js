var express = require('express');
var router = express.Router();

var Notification=require('../models/Notification');

/* GET users listing. */
router.get('/', function(req, res) {
    Notification.find(function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});



// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    router.get('/one/:id',function(req, res) {
        Notification.findById(req.params.id, function (err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });
router.post('/add', function (req, res) {

    var notif = new Notification(req.body);
    notif.libelle = req.body.libelle;
    notif.description = req.body.description;
    // save the bear and check for errors
    notif.save(notif,function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Notif created!' });
    });

});

router.delete('/:id',function(req, res) {
    Notification.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});



    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)


router.put('/:id', function(req,res,next){
    Notification.findByIdAndUpdate(
        req.params.id,
        {$set: {description: req.body.description}},
        {new: true},
        function(err,user){
            if(err){
                res.json({error :err}) ;
            } else{
                res.send(user) ;
            }
        });
});

module.exports=router;