var express = require('express');
var router = express.Router();
var Guide = require('../models/GuidesModel');
router.get('/', function (req, res, next) {
    Guide.getAllGuides(function (err, guides) {
        if (err) {
            console.log(err);
        }
        res.json(guides);
    })
});
router.get('/:id', function (req, res, next) {
    Guide.getGuideById(req.params.id, function (err, guide) {
        if (err) {
            console.log(err.message);
            res.status(404).json(err);
        }
        if(!guide)
        {
            return res.status(404).send();
        }

        if (guide.pathimg==="null" || guide.pathimg===null || guide.pathimg==="" || typeof guide.pathimg=== "undefined") {
            guide.pathimg = "maintain.jpg";
        }
        res.json(guide);
    })
});
router.delete('/:id', function (req, res, next) {
    Guide.removeGuide(req.params.id, function (err) {
        if (err) {
            console.log(err);
            res.status(404).json(err);
        }
        res.status(200).json({"removed":"ok"});
    })
});
router.post('/', function (req, res, next) {
    var newGuide = new Guide({
        title: req.body.title,
        description:req.body.description,
        pathimg:req.body.pathimg,
        iconimg:req.body.iconimg,
        type:req.body.type

    });
    Guide.createGuide(newGuide, function (err, guide) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        res.send("guide Created");
    });
});

module.exports = router;