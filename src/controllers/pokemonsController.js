const {
  pokemonsModule,
  createPokemonModule,
  pokemonsByIdModule,
  pokemonsByNameModule
} = require("../modules/pokemonsModule");

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
    await createPokemonModule(body);
    res.status(200).send({ message: "Pokemon create successfully." });
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

const pokemonsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id :>> ', id);
    const detailPokemon = await pokemonsByIdModule(id);
    return res.status(200).send(detailPokemon);
  } catch (error) {
    return res.status(error.status || 500).send({ error: error.message });
  }
};

module.exports = {
  pokemonsController,
  createPokemonController,
  pokemonsByIdController,
  pokemonsByNameController
};
