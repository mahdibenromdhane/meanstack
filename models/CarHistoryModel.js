/**
 * Created by najd on 03/04/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var carHistorySchema = new Schema({
    place: String,
    datemaintenance: {type: Date, default: Date.now},
    remarks: String,
    odometer: {type: Number,required: true},
    price: Number,
    category: String,
    createdby:{type: String, default: 'Anonymous'},
    car_id: { type: String, required:true }
},{collection : "carhistories"});
module.exports =mongoose.model('CarHistory', carHistorySchema);
