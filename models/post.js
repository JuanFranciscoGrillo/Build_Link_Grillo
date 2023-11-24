// models/post.js
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Associations
      Post.belongsTo(models.User, {foreignKey: 'userId'});
      Post.hasMany(models.Application, {foreignKey: 'postId', as: 'applications'});
      Post.hasMany(models.Comment, {foreignKey: 'postId', as: 'comments'});
    }
  }

  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    budget: DataTypes.FLOAT,
    requiredSkills: DataTypes.STRING, // Could be an array or a comma-separated string
    deadline: DataTypes.DATE,
    // Other necessary fields
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
