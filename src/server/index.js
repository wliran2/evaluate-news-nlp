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
// textapi.sentiment({
//         url: 'https://www.bbc.com/sport/tennis',
//     },
//     function(error, response) {
//         if (error === null) {
//             console.log(response);
//         }
//     });

const app = express()

//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)
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
const port = 8080;
const server = app.listen(port, listening);

function listening() {
    console.log('Example app is listening!!!');
    console.log(`running on localhost: ${port}`);
};


function getData(req, res) {
    res.send(mockAPIResponse)
}


function check(req, res) {
    console.log("checkurl !!!!!!!!!!!!!!!!!!!!!");

    const urlAsinput = req.body.formText;

    console.log(urlAsinput);


    // newEntry = {
    //     url: req.body.url,
    // }

    let result = "eldar";
    textapi.sentiment({
            url: urlAsinput,
        },
        function(error, response) {
            if (error === null) {

                result = response;
                console.log(result);

            }
        });


    res.send(result);
    //  console.log(newEntry)
}