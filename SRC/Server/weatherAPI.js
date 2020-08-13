const fetch = require("node-fetch");

const getWeather = async(lat, lon, date, weatherKey) => {
    let weatherURL = 'https://api.weatherbit.io/v2.0/history/hourly?';
    let prevYear = date.slit('-');
    prevYear[0] = (parseInt(prevYear[0]) - 1).toString();
    prevYear = prevYear.join('-');

}