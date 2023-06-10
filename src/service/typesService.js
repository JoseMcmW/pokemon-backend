const axios = require('axios');
require("dotenv").config();
const { BASE_URL } = process.env;

const typesService = async () => {
	try {
		const { data } = await axios.get(`${BASE_URL}/type`);
		const allTypes = await Promise.all(data.results.map(type => getTypes(type)))
		return allTypes;
	} catch (error) {
		throw error;
	}
}

const getTypes = async (urlTypes) => {
	try {
		const { data } = await axios.get(`${urlTypes.url}`);
		const type = {
			id: data.id,
			name: data.name
		}
		return type;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	typesService
}