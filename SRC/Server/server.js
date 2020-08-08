// Empty Passthrough for data
const projectData = [];


const express = require('express');

const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

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