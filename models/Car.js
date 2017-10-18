var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CarSchema = new Schema({
    immatriculation: {type: String, unique:true},
    model: String,
    name: String,
    year:Date,
    color: {type: String},
    energie : String,
    puissance: Number,
    category: String,
    createdby:{type: String, default: 'Anonymous'},
    battery: { type: mongoose.Schema.Types.ObjectId, ref: 'Battery' },
    carhistories: [{ "type": mongoose.Schema.Types.ObjectId, "ref": "CarHistory" }],
    user_id : String
},{collection : "cars"});
module.exports =mongoose.model('Car', CarSchema);
