const {
  pokemonsService,
  pokemonByNameService,
  pokemonByIdService,
} = require("../service/pokemonsService");
const {
  pokemonsDB,
  pokemonCreate,
  findPokemonById,
  findPokemonByName,
  deletePokemonHandler,
  updatePokemonHandler,
} = require("../handlers/pokemonsHandler");

const pokemonsModule = async () => {
  try {
    const pokemonsFromDb = await pokemonsDB();
    let pokemonsApi = await pokemonsService();
    const concatData = [...pokemonsFromDb, ...pokemonsApi];
    const allPokemons = concatData.map((poke) => {
      return {
        id: poke.id,
        name: poke.name,
        image: poke.image,
        life: poke.hp,
        attack: poke.attack,
        defense: poke.defense,
        speed: poke.speed,
        height: poke.height,
        weight: poke.weight,
        type: poke.types,
      };
    });
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

const pokemonsByNameModule = async (name) => {
  try {
    const searchPokemonDb = await findPokemonByName(name.toLowerCase());

    if (searchPokemonDb.length !== 0) {
      return searchPokemonDb.map((poke) => {
        return {
          id: poke.id,
          name: poke.name,
          image: poke.image,
          life: poke.hp,
          attack: poke.attack,
          defense: poke.defense,
          speed: poke.speed,
          height: poke.height,
          weight: poke.weight,
          type: poke.Types.map((type) => type.name),
        };
      });
    }

    const searchByNameApi = await pokemonByNameService(name.toLowerCase());

    if (searchByNameApi) {
      return {
        id: searchByNameApi.id,
        name: searchByNameApi.name,
        image: searchByNameApi.image,
        life: searchByNameApi.hp,
        attack: searchByNameApi.attack,
        defense: searchByNameApi.defense,
        speed: searchByNameApi.speed,
        height: searchByNameApi.height,
        weight: searchByNameApi.weight,
        type: searchByNameApi.types,
      };
    }
  } catch (error) {
    throw error;
  }
};

const createPokemonModule = async (body) => {
  try {
    return await pokemonCreate(body);
  } catch (error) {
    throw error;
  }
};

const pokemonsByIdModule = async (id) => {
  try {
    if (id.includes("-")) {
      const detailPokemonDb = await findPokemonById(id);
      const pokeFromDB = [detailPokemonDb].map((d) => {
        return {
          id: d.id,
          name: d.name,
          image: d.image,
          attack: d.attack,
          defense: d.defense,
          speed: d.speed,
          height: d.height,
          weight: d.weight,
          type: d.Types.map(
            (t) => t.name.charAt(0).toUpperCase() + t.name.slice(1)
          ),
        };
      });
      return pokeFromDB;
    }

    const detailPokemonApi = await pokemonByIdService(id);
    return detailPokemonApi;
  } catch (error) {
    throw error;
  }
};

const deletePokemonModule = async (id) => {
  try {
    await deletePokemonHandler(id);
  } catch (error) {
    throw error;
  }
};

const updatePokemonModule = async (id, body) => {
  try {
    await updatePokemonHandler(id, body);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  pokemonsModule,
  createPokemonModule,
  pokemonsByIdModule,
  pokemonsByNameModule,
  deletePokemonModule,
  updatePokemonModule,
};
