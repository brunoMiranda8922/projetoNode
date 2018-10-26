const Sequelize = require('sequelize');
const config = require('./models/config.js');
let sequelize = null;

module.exports = () => { 
  if (!sequelize) {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return sequelize;
};