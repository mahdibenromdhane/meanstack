var express = require('express');
var router = express.Router();
var ScoreQuiz = require('../models/scoreQuiz');
var Quiz = require('../models/quiz');

//cbon
/**********Get All quiz *****/
router.get('/', function(req, res) {
    Quiz.find(function (err,quizes) {
        if(err)
            return res.json(err);
        res.json(quizes);
    })
});
//get by id
router.get('/:id', function(req, res) {
    Quiz.find({_id:req.params.id},function (err,quiz) {
        if(!quiz)
            return res.status(404).send();
        res.status(200).send(quiz);
    })
});

router.get('/subject/:name', function(req, res) {
    Quiz.find({ "subject": { "$regex": req.params.name, "$options": "i" } },function (err,quizes) {
        if(!quizes)
            return res.status(404).send();
        res.status(200).send(quizes);
    })
});
router.post('/:user/:quiz', function(req, res) {
    Quiz.find({ "subject": { "$regex": req.params.name, "$options": "i" } },function (err,quizes) {
        if(!quizes)
            return res.status(404).send();
        res.status(200).send(quizes);
    })
});
module.exports=router;