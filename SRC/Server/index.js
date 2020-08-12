//Bring in API functions
const getGeo = require('./geoAPI');
// Empty Passthrough for data
const projectData = [];

// Use .env to hide environmental variables
const dotenv = require('dotenv')
dotenv.config();

// Express server & Setup
const express = require('express');
const app = express();
app.use(express.static('dist'));

// Body Parser setup
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors Setup
const cors = require('cors');
app.use(cors());



//Server functionality

const port = process.env.PORT || 3000;

const runServer = app.listen(port, listening());

function listening() {
    console.log(`Server running on localhost: ${port}`);
}

app.post('/add', input);

function input(req, res) {
    projectData[date] = req.body.date;
    projectData[temp] = req.body.temp;
    projectData['content'] = req.body.content;
    res.send(projectData);
}


app.get('/all', getInput);

function getInput(req, res) {
    res.send(projectData);
}