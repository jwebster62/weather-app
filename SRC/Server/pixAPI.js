const fetch = require('node-fetch');
const { response } = require('express');

const getDestImg = async(city = '', country = '', pixKey) => {
    let url = 'https://pixabay.com/api/?';
    url = `${url}key=${pixKey}&q=${city}+${country}&category=travel`;
    let res = await fetch(url);

    if (res.ok) {
        let pixData = await res.json();
        if (pixData.hits.length > 0) {
            return pixData.hits[0].webformatURL;
        }
    } else {
        console.log(`Error: Can't find image` + response.status + response.statusText + '.');
    }
    return './src/client/media/penguin.png'
};

module.exports = getDestImg;