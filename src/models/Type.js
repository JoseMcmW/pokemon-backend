const { DataTypes } = require("sequelize");
// Exportamos la función que define el modelo de tipos de pokemon
module.exports = (sequelize) => {
  //defino el modelo
  sequelize.define(
    "Types",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
