const { typesModule } = require("../modules/typesModule");

const typesController = async (req, res) => {
  try {
    const types = await typesModule();
    res.status(200).send(types);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

module.exports = {
  typesController,
};
