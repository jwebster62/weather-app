const fetch = require('node-fetch');

const getDestImg = async(city = '', country = '', pixKey) => {
    let url = 'https://pixabay.com/api/?';
    url = `${url}key=${pixKey}&q=${city}+${country}&category=travel`;

}