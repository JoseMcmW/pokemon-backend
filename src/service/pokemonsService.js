const axios = require("axios");
require("dotenv").config();
const { BASE_URL } = process.env;

const pokemonsService = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pokemon`); //Consumimos la API para obtener todos los pokemones.

    const allPokemons = await Promise.all(
      data.results.map(
        (pokemon) => getStats(pokemon) //Pasamos por parametro la data a la funcion getStats
      )
    );
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

const stats = (statsPokemon) => {
  //Toma la spropiedades que usaremos del obj stats.
  const statObject = {};
  statsPokemon.forEach((stat) => {
    statObject[stat.stat.name] = stat.base_stat;
  });
  return statObject;
};

const types = (slotType) => {
  //
  return slotType.map((type) => {
    return type.type.name;
  });
};

const getStats = async (charStats) => {
  //charStats es la data.
  try {
    const { data } = await axios.get(`${charStats.url}`); //Ingresamos a la URL de cada personaje
    const pokemon = {
      //Creamos el objeto con el personaje
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      ...stats(data.stats),
      height: data.height,
      weight: data.weight,
      types: types(data.types),
    };
    return pokemon;
  } catch (error) {
    throw error;
  }
};

const pokemonByNameService = async (name) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pokemon/${name}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      ...stats(data.stats),
      height: data.height,
      weight: data.weight,
      types: types(data.types),
    };
    return pokemon;
  } catch (error) {
    throw error;
  }
};

const pokemonByIdService = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pokemon/${id}`);
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      ...stats(data.stats),
      height: data.height,
      weight: data.weight,
      types: types(data.types),
    };
    return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  pokemonsService,
  pokemonByNameService,
  pokemonByIdService
};
