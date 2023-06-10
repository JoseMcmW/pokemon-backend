const { Types } = require("../db");

const createTypesDB = async (types) => {
	try {
		types.forEach(async (type) => {
			await Types.findCreateFind({where: type})
			return
		});
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createTypesDB
};