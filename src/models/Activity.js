const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
        },
        duration: {
            type: DataTypes.INTEGER,

        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false,}
    );
};