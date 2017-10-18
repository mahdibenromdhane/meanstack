
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReclamationSchema = new Schema({

    dateReclamation: {type: Date, default: Date.now()},
    responseType:{type: Number},
    subject:String,
    Email:String,
    user_id : String,
    Content:String
},{collection : "reclamations"});
module.exports =mongoose.model('Reclamation', ReclamationSchema);
module.exports.createReclamation = function (reclamation, callback) {
    reclamation.save(callback);
};
