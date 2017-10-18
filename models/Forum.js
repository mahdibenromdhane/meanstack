var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ForumSchema = new Schema({
    titre: String,


},{collection : "forums"});
module.exports =mongoose.model('Forum', ForumSchema);
