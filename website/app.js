/* Global Variables */
const apiID = '2ec8b15d6b7487667d0362508db41ea4';
const mainURL = 'https://api.openweathermap.org/data/2.5/weather';
const userZip = document.getElementById('zip');
const userFeel = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const server = 'http://localhost:3000'
    // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();

//Get the temp/weather
const findWeather = async(mainURL, userZip, apiID) => {
    try {
        const req = await fetch(`${mainURL}?zip=${userZip},us&units=imperial&APPID=${apiID}`, )
        const results = await req.json()
        const {
            main: { temp },
        } = results
        return temp
    } catch (e) {
        throw e
    }
}

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
}

const updateUI = async(temps, newDate, feelings) => {
    date.innerText = newDate
    temp.innerText = `${temps}°F`
    content.innerText = feelings
}

document.getElementById('generate').addEventListener('click', () => {
    findWeather(mainURL, zip.value, apiID)
        .then(temp => {
            return { date: newDate, temp, content: feelings.value }
        })
        .then(data => {
            postData('/add', data)
            return data
        })
        .then(({ temp, date, content }) => updateUI(temp, date, content))
        .catch(e => {
            console.log(e)
        })
})