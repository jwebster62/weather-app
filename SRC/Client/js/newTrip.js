export const newTrip = (tripData) => {
    document.getElementById('tripDestination').textContent = `${tripData.dest.city}, ${tripData.dest.country}`;
}