const express = require('express');
const { routes, response } = require('../../app');
const mongoose = require('mongoose');
const Covid = require('./models/covid')
const router = express.Router();

router.get('/:pincd', (req, res, next) => {
    const pincoderq = req.params.pincd;
    Covid
        .find({ "PinCode": pincoderq })
        .exec()
        .then((result) => {

            console.log(result)
            res.status(200).json(result)

        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    // Covid
    //     .countDocuments()
    //     .exec(((err, count) => {
    //         var random = Math.floor(Math.random() * count)
    //         Covid
    //             .findOne()
    //             .skip(random)
    //             .exec()
    //             .then((result) => {
    //                 console.log(result)
    //                 res.status(200).json(result)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //                 res.status(500).json(err)
    //             })
    //     }))




});

router.post('/', (req, res, next) => {


    const caseCovid = new Covid({
        _id: new mongoose.Types.ObjectId(),
        PinCode: req.body.PinCode,
        Address: req.body.Address,
        NumberofpositiveCases: req.body.NumberofpositiveCases,

    })
    caseCovid
        .save()
        .then((result) => {
            console.log(result)

        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
    res.status(200).json({
        message: "POST request works",
        createdcontent: caseCovid
    })


})

router.delete('/:postId', (req, res, next) => {
    const id = req.params.postId;
    Covid
        .remove({ _id: id })
        .exec()
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router;