const fetch = require('node-fetch');

const getGeo = async(dest = '', key) => {
    const geoURL = `http://api.geonames.org/search?username=${key}&type=json&name=`;

    let res = await fetch(geoURL + dest);

    if (res.ok) {
        let geoData = await res.json();
        if (geoData.geonames.length > 0) {
            geoData = geoData.geonames[0];
            return {
                lat: geoData.lat.slice(0, 6),
                lon: geoData.lng.slive(0, 6),
                country: geoData.countryCode,
                city: geoData.name
            }
        };
    } else {
        console.log(`ERROR: ${res.status} ${res.statusText}.`);
    }
    return {
        lat: "no info",
        lon: "no info",
        country: "no info",
        city: "no info"
    };
};

module.exports = getGeo;