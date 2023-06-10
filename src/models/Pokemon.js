const { DataTypes } = require('sequelize');
// Exportamos la función que define el modelo de los pokemon
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemons', {
    id: { //id
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    name: { //name
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    height: { //height
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: { //weight
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false,
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