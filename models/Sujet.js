var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SujetSchema = new Schema({
    titre: String,
    description:String,
    idForum:String,
    date:Date,
    idUser:String,
},{collection : "sujets"});
module.exports =mongoose.model('Sujet', SujetSchema);
