/**
 * Created by najd on 03/04/2017.
 */
var express = require('express');

var router = express.Router();
var CarHistory = require('../models/CarHistoryModel');
var Car = require('../models/Car');

router.get('/', function (req, res) {
    CarHistory.find(function (err, carhistories) {
        if (err)
            return res.send(err);
        res.send(carhistories);
    });
});
/****************Get All History car  of user *******************/
router.get('/:idcar', function (req, res) {
    CarHistory.find({'car_id': req.params.idcar}, function (err, carhistories) {
        if (err)
            return res.send(err);
        res.send(carhistories);
    });

});
/************ADD history In Carhistory Schema and add Carhistory in Car Schema ************************/
router.post('/:idcar', function (req, res) {
    Car.findById(req.params.idcar, function (err, cars) {
        if (!cars)
            return res.status(404).send({"message": "car not found"});
        console.log(req.params.idcar);
       var  carHistory = new CarHistory(req.body);
        carHistory.car_id = req.params.idcar;
        carHistory.save(carHistory, function (err, res) {
            if (err)return res.send(err);
        });
        Car.findByIdAndUpdate(carHistory.car_id, {$push: {"carhistories": carHistory}}, function (err, res) {
            if (err)
                return res.status(404).send(err);
        });
        res.send(carHistory);
    });
});


router.get('/gethistory/:id', function (req, res) {
    CarHistory.findById(req.params.id, function (err, carhistories) {
        if (!carhistories)
            return res.status(404).send();
        res.status(200).send(carhistories);
    })
});

router.delete('/:id', function (req, res) {
    CarHistory.findById(req.params.id, function (err, CarHistory) {
        if (!CarHistory)return res.status(404).send();
        Car.findByIdAndUpdate({'_id': CarHistory.car_id}, {$pull: {carhistories: CarHistory._id}}, function (err, data) {
            if (err) {
                return res.status(500).send({'error': 'error in deleting carhisrories'});
            }
        });
    });
    CarHistory.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.status(501).send(err);
    });
    return res.send({"message": "remove ok"})
});
//id => idcar
/*
router.put('/:id', function (req, res) {
    CarHistory.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err) {
        if (err) return res.status(501).send(err);
        res.send({"success": true});
    })
});
*/


/********************Modify Car History using ID**************************/
router.put('/:id', function(req, res) {

    CarHistory.findById(req.params.id, function (err, carhistories) {
        if (!carhistories)
            return res.status(404).send({"message":"Car History not found"});
        CarHistory.findByIdAndUpdate(req.params.id,req.body,function (err) {
            if(err)return res.status(501).send(err);
            return res.send({"success":true});
        })
    });


});


module.exports = router;