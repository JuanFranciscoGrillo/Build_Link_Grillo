// models/comment.js
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // Associations
      Comment.belongsTo(models.User, {foreignKey: 'userId'});
      Comment.belongsTo(models.Post, {foreignKey: 'postId'});
    }
  }

  Comment.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    // Other necessary fields
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};
