const { Pokemons, Types } = require("../db");
const { Op } = require("sequelize");

//Agregamos pokemones a la DB, tabla Pokemons.
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

//Buscamos todos los pokemones de la DB, tabla Pokemons
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

//Buscamos pokemones por el ID.
const findPokemonById = async (id) => {
  try {
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

//Buscamos pokemones por el nombre.
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
};

//Eliminamos pokemon por su id.
const deletePokemonHandler = async (id) => {
  try {
    return await Pokemons.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

const updatePokemonHandler = async (id, body) => {
  try {
    // Actualiza los datos básicos del Pokémon en la tabla Pokemons
    await Pokemons.update(body, {
      where: {
        id: id,
      },
    });

    // Encuentra los tipos asociados al Pokémon actual
    const pokemon = await Pokemons.findByPk(id);
    const currentTypes = await pokemon.getTypes();

        // Encuentra los tipos en la base de datos que coinciden con los nuevos tipos proporcionados
        const newTypes = await Types.findAll({
          where: {
            name: {
              [Op.in]: body.types,
            },
          },
        });
        // Elimina los tipos actuales asociados al Pokémon
        await pokemon.removeTypes(currentTypes);

        // Asocia los nuevos tipos al Pokémon
        await pokemon.addTypes(newTypes);

        // Retorna el Pokémon actualizado
        return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  pokemonsDB,
  pokemonCreate,
  findPokemonById,
  findPokemonByName,
  deletePokemonHandler,
  updatePokemonHandler,
};
