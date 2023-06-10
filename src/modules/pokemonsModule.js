const {
	pokemonsService,
  pokemonByNameService,
  pokemonByIdService
} = require('../service/pokemonsService');
const {
	pokemonsDB,
	pokemonCreate,
	findPokemonById,
  findPokemonByName
} = require('../handlers/pokemonsHandler');

const pokemonsModule = async () => {
  try {
    const pokemonsFromDb = await pokemonsDB();
    let pokemonsApi = await pokemonsService();
    const concatData = [...pokemonsFromDb, ...pokemonsApi]
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
        type: poke.types
      }
    })
      return allPokemons;
    } catch (error) {
      throw error;
  }
}

const pokemonsByNameModule = async (name) => {
  try {
    const searchPokemonDb = await findPokemonByName(name.toLowerCase());

    if(searchPokemonDb.length !== 0) {
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
          type: poke.types
        }
      })
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
}

const createPokemonModule = async (pokemon) => {
  try {
    return await pokemonCreate(pokemon)
  } catch (error) {
    throw error;
    }
}

const pokemonsByIdModule = async (id) => {
	try {
		if(id.includes("-")) {
			const detailPokemonDb = await findPokemonById(id)
			return detailPokemonDb;
		}

		const detailPokemonApi = await pokemonByIdService(id);
		return detailPokemonApi;

	} catch (error) {
		throw error;
	}
}

module.exports = {
  pokemonsModule,
  createPokemonModule,
	pokemonsByIdModule,
  pokemonsByNameModule
}