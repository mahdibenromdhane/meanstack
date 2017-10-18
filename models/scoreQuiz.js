var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ScoreQuizSchema = new Schema({

    user_id: {type: String},
    idquiz:{type: Number},
    answer:String,
    correct: String,
    datecreation:{ type: Date, default: Date.now }

},{collection : "ScoreQuiz"});
module.exports =mongoose.model('ScoreQuiz', ScoreQuizSchema);
