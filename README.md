# Capstone Travel App

This is my entry for the 5th and final project in Udacity's Front End Web Developer Nanodegree, The Capstone Travel App.

# To Run Locally
git clone the project
npm install
create .env file
.env file should have:
* GEO_KEY=YOUR-KEY-HERE
* PIX_KEY=YOUR-KEY-HERE
* WEATHER_KEY=YOUR-KEY-HERE
To get keys for the above APIs go to:
* Geonames - https://www.geonames.org/login - Then create an account. Your key is your username.
* Pixabay - https://pixabay.com/api/docs/ - Follow instructions to sign up on Pixabay.
* Weatherbit - https://www.weatherbit.io/api - Follow instructions to sign up on Weatherbit

npm start (to start your server)
npm run build-dev (to run the app in development mode)
npm run build-prod (to run the app in production mode)
npm run test (to run the test cases)

# Goals
* Make a request using the API through weatherbit to get the location's temperature utilizing user's destination input.
* Get data from server and update the UI

