var express = require('express');
var router = express.Router();
var scoreQuiz = require('../models/scoreQuiz');
var quiz = require('../models/quiz');

/**************Submit Quiz Answer***********************/
router.post('/submit/:idquiz/:iduser', function (req, res) {
    quiz.findById({_id: req.params.idquiz}, function (err, quizResult) {
        console.log(req.params.iduser);
        if (!quiz)
            return res.status(404).send();
        var scorequiz = new scoreQuiz();
        scorequiz.user_id = req.params.iduser;
        scorequiz.idquiz = quizResult._id;
        scorequiz.answer = req.body.answer;
        scorequiz.correct = quizResult.tags[quizResult.correct - 1];
        scorequiz.save(scorequiz, function (err) {
            if (err)return res.send(err);
            return res.send((scorequiz))
        });
    });

});
/**************Get Quiz submitted by user***********************/
router.get('/getquizes/:iduser', function (req, res) {
    scoreQuiz.find({user_id: req.params.iduser}, function (err, quizesusers) {
        if (!quiz)
            return res.status(404).send();
        res.send(quizesusers);
    });
});
/**************Update User Score***********************/
router.post('/score/:iduser', function (req, res) {
    var scoreuser = 0 ;
    var myuser = new User();
    scoreQuiz.find({user_id: req.params.iduser}, function (err, quizesusers) {
        if (!quiz)
            return res.status(404).send();
        User.findById(req.params.iduser, function (err, user) {
            if (err)
                return res.status(404).send(err);
             myuser = user;
            scoreuser = myuser.scorequiz;
        });


        quizesusers.forEach(function (quizesuser) {
            if (quizesuser.answer === quizesuser.correct) {
                scoreuser = scoreuser + 1;
            }

        });
        User.findByIdAndUpdate(req.params.iduser, { "$set": { "scorequiz": scoreuser}}, function (err, res) {
            if (err)
                return res.status(404).send(err);
        });
        res.send(quizesusers);
    });
});


module.exports = router;