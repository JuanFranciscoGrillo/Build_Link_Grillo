// connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'YOUR_DATABASE', 
  process.env.DB_USER || 'YOUR_USERNAME', 
  process.env.DB_PASSWORD || 'YOUR_PASSWORD', 
  {
    host: process.env.DB_HOST || 'YOUR_HOST',
    dialect: 'mysql', // or another dialect like 'postgres', 'sqlite', etc.
    // Additional configuration options if needed
  }
);

module.exports = sequelize;
