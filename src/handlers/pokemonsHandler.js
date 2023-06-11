const { Pokemons, Types } = require("../db");
const { Op } = require("sequelize");

const pokemonCreate = async (body) => {
  try {
    const savePokemon = await Pokemons.create(body);
    const findType = await Types.findAll({
      where: {
        name: {
          [Op.in]: body.types,
        },
      },
    });
    savePokemon.addType(findType);
    return savePokemon;
  } catch (error) {
    throw error;
  }
};

const pokemonsDB = async () => {
  try {
    const pokemonFromDB = await Pokemons.findAll({
      include: [
        {
          model: Types,
          attributes: ["name"],
        },
      ],
    });
    return pokemonFromDB;
  } catch (error) {
    throw error;
  }
};

const findPokemonById = async (id) => {
  try {
    console.log('id :>> ', id);
    const findByIdDB = await Pokemons.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Types,
          attributes: ["name"],
        },
      ],
    });
    return findByIdDB;
  } catch (error) {
    throw error;
  }
};

const findPokemonByName = async (name) => {
  try {
    const searchByName = await Pokemons.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Types,
          attributes: ["name"],
        },
      ],
    });
    return searchByName;
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
