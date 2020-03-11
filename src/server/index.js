const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
var bodyParser = require('webpack-body-parser')
let baseURL = 'https://api.aylien.com/api/v1/sentiment?language=en&mode=tweet&input='

//concest the API with the dotenv 
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
textapi.sentiment({
        url: 'https://www.bbc.com/sport/tennis',
    },
    function(error, response) {
        if (error === null) {
            console.log(response);
        }
    });

const app = express()

//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('webpack-body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)
app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8081;
const server = app.listen(port, listening);

function listening() {
    console.log('Example app is listening!!!');
    console.log(`running on localhost: ${port}`);
};

//GET route
app.get('/', getData);

function getData(req, res) {
    res.send(mockAPIResponse)
}
// POST from site
app.post('/', check);

function check(req, res) {
    newEntry = {
        url: req.body.url,
    }
    console.log(url)
    console.log(res)
    res.send(mockAPIResponse)
    console.log(newEntry)
}