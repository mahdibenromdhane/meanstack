var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentaireSchema = new Schema({
    titre: String,
    description:String,
    idSujet:String,
    date:Date,
    idUser:String


},{collection : "commentaires"});
module.exports =mongoose.model('Commentaire', CommentaireSchema);
