'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Associations
      User.hasMany(models.Post, {foreignKey: 'userId', as: 'posts'});
      User.hasMany(models.Application, {foreignKey: 'userId', as: 'applications'});
      User.hasMany(models.Message, {foreignKey: 'senderId', as: 'sentMessages'});
      User.hasMany(models.Message, {foreignKey: 'receiverId', as: 'receivedMessages'});
      User.hasMany(models.Comment, {foreignKey: 'userId', as: 'comments'});
    }
  }

  User.init(
      {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        profilePicture: DataTypes.STRING,
        bio: DataTypes.TEXT,
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      // Other necessary fields
      },
      {
        sequelize,
        modelName: 'User',
      },
  );

  return User;
};
