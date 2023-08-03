const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.FLOAT, // Permite  almacenar números con decimales
      
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false,}
  );
};