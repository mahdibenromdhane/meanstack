var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username:{type: String, lowercase: true, unique: true},
    email : {
        type:String,
        required:true,
        unique:true,
        minlength:1,
        trim:true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email!'
        }
    },
    img: String,
    numcars: {type: Number, default: 0},
    numbattery: {type: Number, default: 0},
    accountcreated: {type: Date, default: Date.now()},
    location: {type: String, default: 'Unknown'},
    age: {type: Number},
    occupation: {type: String},
    userrole: {type: String, default: 'User'},
    cars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}],
    batteries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Battery'}]

},{collection : "users"});
module.exports =mongoose.model('User2', UserSchema);
