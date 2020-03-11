const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
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

app.use(express.static('dist'))

console.log(__dirname)
app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8080;
const server = app.listen(port, listening);

function listening() {
    console.log('Example app is listening!!!');
    console.log(`running on localhost: ${port}`);
};

//GET route
app.get('/all', getData);

function getData(req, res) {
    res.send(mockAPIResponse)
}

app.post('/check', check);

function check(req, res) {
    newEntry = {
        url: req.body.url,
    }
    res.send(mockAPIResponse)
    console.log(newEntry)
}