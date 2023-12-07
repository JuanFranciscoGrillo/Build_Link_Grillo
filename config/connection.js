const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'Build_Link_Grillo',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'hello',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    logging: false, // Disables logging
    dialect: 'mysql', // or another dialect like 'postgres', 'sqlite', etc.
    // Additional configuration options if needed
  }
);

module.exports = sequelize;
