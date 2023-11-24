const sequelize = require('../config/connection');
const {DataTypes} = require('sequelize');

// Import models
const Application = require('./application')(sequelize, DataTypes);
const Comment = require('./comment')(sequelize, DataTypes);
const Message = require('./message')(sequelize, DataTypes);
const Post = require('./post')(sequelize, DataTypes);
const User = require('./user')(sequelize, DataTypes);

// Define associations between models if you have any
// Example: User.hasMany(Post);

module.exports = {
  sequelize,
  Application,
  Comment,
  Message,
  Post,
  User,
};
