// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Setup Server
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