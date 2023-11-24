// models/message.js
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // Associations
      Message.belongsTo(models.User, {foreignKey: 'senderId', as: 'sender'});
      Message.belongsTo(models.User, {foreignKey: 'receiverId', as: 'receiver'});
    }
  }

  Message.init({
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    // Other necessary fields
  }, {
    sequelize,
    modelName: 'Message',
  });

  return Message;
};
