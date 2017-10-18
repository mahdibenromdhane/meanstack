/**
 * Created by najd on 03/04/2017.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://xx:xx@ds133260.mlab.com:33260/meanstack');
module.exports=mongoose;