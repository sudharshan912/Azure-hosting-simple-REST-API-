const express = require('express');
const { routes, response } = require('../../app');
const mongoose = require('mongoose');
const Social = require('./models/social')
const router = express.Router();

router.get('/', (req, res, next) => {

    Social
        .find()
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


    const Sociallink = new Social({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        LinkedIn: req.body.LinkedIn,
        Instagram: req.body.Instagram,
        GitHub: req.body.GitHub,
        Facebook: req.body.Facebook
    })
    Sociallink
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
        createdcontent: Sociallink
    })


})

router.delete('/:postId', (req, res, next) => {
    const id = req.params.postId;
    Social
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