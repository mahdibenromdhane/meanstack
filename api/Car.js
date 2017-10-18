var express = require('express');
var router = express.Router();
var Car =require('../models/Car');

var User =require('../models/User');
//cbon
/**********Get All cars of User*****/
//http://localhost:3000/api/cars/usercars/:iduser
router.get('/usercars/:iduser', function(req, res) {
    var iduser = req.params.iduser;
    User.findById(iduser, function (err, users) {
        if (!users)
            return res.status(404).send({"message": "user not found"});
        Car.find({user_id:iduser},function (err,cars) {
            if(err)
                return res.json(err);
            return res.json(cars);
        });
    });
});
//cbon
/**********Add Car To  User*****/
//http://localhost:3000/api/cars/:iduser
/************ADD history In Carhistory Schema and add Carhistory in Car Schema ************************/
router.post('/:iduser', function (req, res) {
    User.findById(req.params.iduser, function (err, users) {
        if (!users)
            return res.status(404).send({"message": "User not found"});
        var  car = new Car(req.body);
        car.user_id = req.params.iduser;
        car.save(car, function (err) {
            if (err)return res.send(err);
        });
        User.findByIdAndUpdate(car.user_id, {$push: {"cars": car}}, function (err, res) {
            if (err)
                return res.status(404).send(err);
        });
        res.json(car);
    });
});
/************Get Car Using ID*************************/
//http://localhost:3000/api/cars/:id
router.get('/:id', function(req, res) {
    Car.findById(req.params.id,function (err,cars) {
        if(!cars)
            return res.status(404).send({"message": "Car not found "});
        res.status(200).send(cars);
    })
});
/************Delete Car Using ID + DELTE the car  in  User.cars*************************/
router.delete('/:id', function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (!car) return res.status(404).send({'sucess': false});
        User.findByIdAndUpdate({'_id': car.user_id}, {$pull: {cars: car._id}}, function (err, data) {
            if (err) {
                console.log(err);
                return res.status(404).send({'sucess': false});
            }
        });
        Car.findByIdAndRemove(req.params.id, function (err) {
            if (err)  return res.status(404).send({'sucess': false});
            return res.status(200).send();
        });
    });
});
/********************Modify Car  using ID**************************/
router.put('/:id', function(req, res) {
    console.log(req.body);
    Car.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
            return res.status(501).send(err);
        res.send({"success":true});
    })
});
module.exports=router;