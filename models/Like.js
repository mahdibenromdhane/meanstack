var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LikeSchema = new Schema({
    idSujet: String,
    idUser: String


},{collection : "likes"});
module.exports =mongoose.model('Like', LikeSchema);
