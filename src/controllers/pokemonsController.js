const {
  pokemonsModule,
  createPokemonModule,
  pokemonsByIdModule,
  pokemonsByNameModule,
  deletePokemonModule,
  updatePokemonModule,
} = require("../modules/pokemonsModule");

//Todos los pokemones
const pokemonsController = async (req, res) => {
  try {
    const pokemones = await pokemonsModule();
    res.status(200).send(pokemones);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const pokemonsByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const pokemonesByName = await pokemonsByNameModule(name);
    res.status(200).send(pokemonesByName);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const createPokemonController = async (req, res) => {
  try {
    const { body } = req;
    const savePokemon = await createPokemonModule(body);
    res.status(201).send(savePokemon);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const pokemonsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const detailPokemon = await pokemonsByIdModule(id);
    return res.status(200).send(detailPokemon);
  } catch (error) {
    return res.status(error.status || 500).send({ error: error.message });
  }
};

const deletePokemonController = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePokemonModule(id);
    res.status(200).send({ message: "Pokemon deleted successfully" });
  } catch (error) {
    return res.status(error.status || 500).send({ error: error.message });
  }
};

const updatePokemonController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await updatePokemonModule(id, body);
    res.status(200).send({ message: "Pokemon updated successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  pokemonsController,
  createPokemonController,
  pokemonsByIdController,
  pokemonsByNameController,
  deletePokemonController,
  updatePokemonController,
};
