const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
var bodyParser = require('webpack-body-parser')

//concest the API with the dotenv 
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//support diffrent domains - in my case donmine change is the port 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('dist'))



//GET route
app.get('/check', getData);
// POST from site
app.post('/checkurl', check);
// all other get request
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

function getData(req, res) {
    res.send()
}

function check(req, res) {
    const urlAsinput = req.body.formText;
    console.log(urlAsinput);

    textapi.sentiment({
            url: urlAsinput,
        },
        function(error, response) {
            if (error === null) {
                console.log(response);
            }
            res.set('Content-Type', 'application/json');
            res.send(response)
        });;
}