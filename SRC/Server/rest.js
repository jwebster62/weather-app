const fetch = require('node-fetch')
    //Use country code data provided by Geonames API to get the country data from the RestCountries API
const restApi = async(code = '') => {
    const restUrl = 'https://restcountries.eu/rest/v2/alpha/';

    let res = await fetch(restUrl + code);
    console.log('RestAPI', res.ok);

    if (res.ok) {
        let restData = await res.json();

        return {
            country: restData.name
        };
    } else {
        console.log('RestAPI Error');
    }
    return 'no info';
};


module.exports = restApi;