/* Global Variables */
const weatherKey = 'process.env.WEATHER_KEY';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
const userDest = document.getElementById('destInput');
const userFeel = document.getElementById('depInput');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();

//Get the temp/weather
const findWeather = async(weatherURL, userDest, weatherKey) => {
    try {
        const req = await fetch(`${weatherURL}?zip=${userDest},us&units=imperial&APPID=${weatherKey}`, )
        const results = await req.json()
        const {
            main: { temp },
        } = results
        return temp
    } catch (e) {
        throw e
    }
};

const postData = async(path, data) => {
    try {
        await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    } catch (e) {
        throw e
    }
};

const updateUI = async(temps, newDate, depInput) => {
    date.innerText = newDate
    temp.innerText = `${temps}°F`
    content.innerText = depInput
};

document.getElementById('Submit').addEventListener('click', () => {
    findWeather(weatherURL, destInput.value, weatherKey)
        .then(temp => {
            return { date: newDate, temp, content: depInput.value }
        })
        .then(data => {
            postData('/add', data)
            return data
        })
        .then(({ temp, date, content }) => updateUI(temp, date, content))
        .catch(e => {
            console.log(e)
        })
});