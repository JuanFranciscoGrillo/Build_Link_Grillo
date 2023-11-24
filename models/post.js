/* eslint-disable require-jsdoc */
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Post to User (Many-to-One)
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });

      // Post to Comments (One-to-Many)
      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
      });

      // Post to Applications (One-to-Many)
      Post.hasMany(models.Application, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    company: DataTypes.STRING,
    user_id: DataTypes.INTEGER, // assuming this is the foreign key to User
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
