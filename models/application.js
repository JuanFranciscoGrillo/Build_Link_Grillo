// models/application.js
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      // Associations
      Application.belongsTo(models.User, {foreignKey: 'userId'});
      Application.belongsTo(models.Post, {foreignKey: 'postId'});
    }
  }

  Application.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    coverLetter: DataTypes.TEXT,
    resume: DataTypes.STRING, // URL or file path
    status: DataTypes.STRING, // e.g., 'pending', 'accepted', 'rejected'
    // Other necessary fields
  }, {
    sequelize,
    modelName: 'Application',
  });

  return Application;
};
