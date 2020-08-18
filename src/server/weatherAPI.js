const fetch = require("node-fetch");

const getWeather = async(lat, lon, date, weatherKey) => {
    let weatherURL = 'https://api.weatherbit.io/v2.0/history/hourly?';
    let prevYear = date.split('-');
    prevYear[0] = (parseInt(prevYear[0]) - 1).toString();
    prevYear = prevYear.join('-');
    url = `${weatherURL}key=${weatherKey}&lat=${lat}&lon=${lon}&start_date=${prevYear}:12&end_date=${prevYear}:13&units=I`;


    let res = await fetch(url);

    if (res.ok) {
        let weatherData = await res.json();
        return {
            temp: weatherData.data[0].temp,
            desc: weatherData.data[0].weather.description

        };


    } else {
        console.log('Weather broken');
        return {
            temp: "broken",
            desc: "broken"
        };
    }
};


module.exports = getWeather;