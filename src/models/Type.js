const { DataTypes, Sequelize } = require('sequelize');
// Exportamos la función que define el modelo de tipos de pokemon
module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes .UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};