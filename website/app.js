/* Global Variables */
const apiID = '2ec8b15d6b7487667d0362508db41ea4';
const mainURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const userZip = document.getElementById('zip');
const userFeel = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const server = 'http://localhost:3000'
    // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//Get the temp/weather
const findWeather = async(mainURL, zip, apiID) => {
    try {
        const req = await fetch(`${mainURL}${userZip},us&units=imperial&APPID=${apiID}`, )
        const results = await
    }
}