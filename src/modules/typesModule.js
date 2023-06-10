const {
	typesService
} = require('../service/typesService');
const {
	createTypesDB
} = require('../handlers/typesHandlers');

const typesModule = async () => {
	try {
		let typesPokemonApi = await typesService();
		const typesPokemon = await typesPokemonApi.map((type) => {
			return{
				name: type.name
			};
		});
		await createTypesDB(typesPokemon);
		return typesPokemon;
	} catch (error) {
		throw error;
	}

}

module.exports = {
	typesModule
}