const express = require('express');

const app = express();
const mongoose = require('mongoose');
const factRouters = require('./api/routes/facts')
const covidRouters = require('./api/routes/covid_19_data')
const socialRouters = require('./api/routes/sociallink')
const allcovidRouters = require('./api/routes/allcovid')

const morgan = require('morgan');

mongoose.connect("mongodb+srv://sudharshan:sudharshan@factstrial.fxvfw.azure.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", 'PUT,GET,POST,DELETE,PATCH')
        return res.status(200).json({})
    }
    next();
})
const bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/facts', factRouters);
app.use('/covidtracker', covidRouters);
app.use('/social', socialRouters);
app.use('/allcovid', allcovidRouters);

module.exports = app;