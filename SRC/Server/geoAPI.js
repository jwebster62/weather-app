const fetch = require('node-fetch');

const getGeo = async(dest = '', geoKey) => {
    const geoURL = `http://api.geonames.org/search?username=${geoKey}&type=json&name=`;
    console.log(`My dest: ${dest}`)
    console.log(`My key: ${geoKey}`)
    let res = await fetch(geoURL + dest);

    if (res.ok) {
        let geoData = await res.json();
        if (geoData.geonames.length > 0) {
            geoData = geoData.geonames[0];
            return {
                lat: geoData.lat.slice(0, 6),
                lon: geoData.lng.slice(0, 6),
                country_code: geoData.countryCode,
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