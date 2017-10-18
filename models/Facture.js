var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FactureSchema = new Schema({
    name : String,
    date: String,
    reference: String,
    adresse: String,
    mois:Number,
    luminositeN:Number,
    luminositeA:Number,
    GazN:Number,
    GazA:Number,
    ConsommLum:Number,
    ConsommGaz:Number,
    PuGaz:Number,
    PuLum:Number,
    RedFixes:Number,
    services:Number,
    taxes:Number,
    soldes:Number



},{collection : "factures"});
module.exports =mongoose.model('Facture', FactureSchema);