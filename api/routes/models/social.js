const mongoose = require('mongoose')


const SocialSchema = mongoose.Schema({




    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    LinkedIn: String,
    Instagram: String,
    GitHub: String,
    Facebook: String


})
module.exports = mongoose.model('Social', SocialSchema)