var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuizSchema = new Schema(
    {
    _id:Number,
    subject:String,
    question: String,
    tags: [],
    correct:Number,
    description:String
  },{collection : "quiz"});
module.exports =mongoose.model('quiz', QuizSchema);
