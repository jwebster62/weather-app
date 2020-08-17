export const newTrip = (tripData) => {
    //Destination
    document.getElementById('tripDestination').textContent = `${tripData.dest.city}, ${tripData.dest.country}`;
    //Date
    document.getElementById('date').textContent = `Departing on ${tripData.date}`;
    //Weather
    document.getElementById('tripWeather').textContent = `Normal weather for this date: ${tripData.weather.temp}°F and ${tripData.weather.desc}`;
    //Destination Image
    document.getElementById('destImg').src = tripData.image;
}