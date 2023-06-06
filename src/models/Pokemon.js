const { DataTypes, Sequelize } = require('sequelize');
// Exportamos la función que define el modelo de los pokemon
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: { //id
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    name: { //name
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false
    },
    life: { //stats
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    heigth: { //height
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: { //weight
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });
};

/* "stats": [
  {
    "base_stat": 45,
    "stat": {
      "name": "hp",
    }
  },
  {
    "base_stat": 49,
    "stat": {
      "name": "attack",
    }
  },
  {
    "base_stat": 49,
    "stat": {
      "name": "defense",
    }
  },
  {
    "base_stat": 45,
    "stat": {
      "name": "speed",
    }
  }
], */