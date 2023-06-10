const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  pokemonsController,
  createPokemonController,
  pokemonsByIdController,
  pokemonsByNameController
} = require("../controllers/pokemonsController");
const {
	typesController
} = require("../controllers/typesController");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", pokemonsController);
router.get("/pokemons/name", pokemonsByNameController);
router.get("/pokemons/:id", pokemonsByIdController);
router.post("/pokemons", createPokemonController);
router.get("/types", typesController)

module.exports = router;
