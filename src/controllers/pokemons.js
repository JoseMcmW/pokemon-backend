const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');

const pokemons = async () => {
    const { data } = await axios.get(`${URL}`);
    console.log(data);
}

module.exports = {
    pokemons
}