/**
 * Created by najd on 03/04/2017.
 */var mongoose = require('mongoose');
var GuideSchema = mongoose.Schema({
    title: {
        type: String
        , index: true
        , required: true
    },
    description: {
        type: String
        , required: true
    },
    iconimg:{
        type: String
    },
    pathimg: {
        type: String
    },
    type:{
        type: String
    }
});
var Guide = module.exports = mongoose.model('Guide', GuideSchema);
//select to avoid description field in mongodb which slow down page loading
module.exports.getAllGuides = function (callback) {
    Guide.find(callback).select('-description');
};
module.exports.getGuideById = function (id, callback) {
    Guide.findById(id, callback);
};
module.exports.createGuide = function (newGuide, callback) {
    newGuide.save(callback);
};
module.exports.updateGuide = function (newGuide, callback) {
    newGuide.findOneAndUpdate({_id:id},callback);
};
module.exports.removeGuide = function(id,callback){
    Guide.find({_id:id}).remove(callback);
};
