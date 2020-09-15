const mongoose = require('mongoose')


const covidtrackSchema = mongoose.Schema({




    _id: mongoose.Schema.Types.ObjectId,
    PinCode: String,
    Address: String,
    NumberofpositiveCases: String,


})
module.exports = mongoose.model('Covid', covidtrackSchema)