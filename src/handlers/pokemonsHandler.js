const { Pokemons, Type } = require("../db");
const { Op } = require("sequelize");

const pokemonCreate = async (pokemon) => {
  try {
    return await Pokemons.create(pokemon);
  } catch (error) {
    throw error;
  }
};

const pokemonsDB = async () => {
  try {
    return await Pokemons.findAll();
  } catch (error) {
    throw error;
  }
};

const findPokemonById = async (id) => {
  try {
    return await Pokemons.findByPk(id);
  } catch (error) {
    throw error;
  }
};

const findPokemonByName = async (name) => {
  try {
    return await Pokemons.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  pokemonsDB,
  pokemonCreate,
  findPokemonById,
  findPokemonByName
};
