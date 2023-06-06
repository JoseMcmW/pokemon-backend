const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('../controllers/pokemons');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* router.get('/pokemons', pokemons); */


module.exports = router;
