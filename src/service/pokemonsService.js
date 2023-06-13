const axios = require("axios");
require("dotenv").config();
const { BASE_URL } = process.env;

//Consumimos la API con axios para traer todos los pokemones
const pokemonsService = async () => {
  try {
    let arrayPokemons = [];
    let url = `${BASE_URL}/pokemon`;
    for (let i = 1; i <= 7; i++) {
      const { data: pokemons } = await axios.get(url);
      arrayPokemons.push(...pokemons.results);
      url = pokemons.next;
    }

    const allPokemons = await Promise.all(
      arrayPokemons.map(
        (pokemon) => getStats(pokemon)
      )
    );
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

//Helper: extraemos key y value que usaremos del obj stats (ho, attack, defense, speed).
const stats = (statsPokemon) => {
  //Toma la spropiedades que usaremos del obj stats.
  const statObject = {};
  statsPokemon.forEach((stat) => {
    statObject[stat.stat.name] = stat.base_stat;
  });
  return statObject;
};

//Helper: extraemos el value de la propiedad name del obj type, en el array de obj types.
const types = (slotType) => {
  return slotType.map((type) => {
    return type.type.name;
  });
};

//Ingresamos a la url de la key url, para ingresar a cada uno de los pokemones.
const getStats = async (charStats) => {
  try {
    const { data } = await axios.get(`${charStats.url}`);
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

//Traemos a todos los pokemones, por query a traves de la ruta indicada.
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

//Traemos a todos los pokemones por params con el id.
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
  pokemonByIdService,
};
