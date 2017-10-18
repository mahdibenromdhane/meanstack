
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NotificationSchema = new Schema({
    libelle: String,
    description:String,
    //dimension: {type: String, unique:true},
   // car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    //carpacity:string,
    //weight : String,
    //voltage: Number,
    //category: String,
    //level:{type: Number, default: 0},
   // user:{type: String, default: 'Anonymous'}
},{collection : "notifications"});
module.exports =mongoose.model('Notification', NotificationSchema);
