const { Router } = require("express");

const {
  pokemonsController,
  createPokemonController,
  pokemonsByIdController,
  pokemonsByNameController,
  deletePokemonController,
  updatePokemonController
} = require("../controllers/pokemonsController");
const { typesController } = require("../controllers/typesController");

const router = Router();

// rutas
router.get("/pokemons", pokemonsController);
router.get("/pokemons/name", pokemonsByNameController);
router.get("/pokemons/:id", pokemonsByIdController);
router.post("/pokemons", createPokemonController);
router.get("/types", typesController);
router.delete("/pokemons/:id", deletePokemonController);
router.put("/pokemons/:id", updatePokemonController)

module.exports = router;
