/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	id: String,
	password: String,
	username: String,
        imei: String,
	firstName: String,
	lastName: String,
        image: String,
        cars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}],
    batteries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Battery'}],
    scorequiz: {type: Number,default:0},
    barcodewinquiz: {type: Number,default:0}
});