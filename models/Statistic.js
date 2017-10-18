var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StatisticSchema = new Schema({
    mois : String,
    time : String,
    utilisation : String,
    status : String,
    foe : String,
    tlus : String,
    vol :String,
    cycle : String,
    temp : String,
    str : String,
    speed : String,
    loc : String,
    type : String,
    ip : String,
    udata : String,
    batterylevel : String,
    state : String,
},{collection : "statistics"});
module.exports =mongoose.model('Statistic', StatisticSchema);
