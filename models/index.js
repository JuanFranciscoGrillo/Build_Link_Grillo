const Sequelize = require('sequelize');
const {DataTypes} = Sequelize;

const sequelize = new Sequelize({
  // Configure your database connection here
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Define your models
const Application = require('./Application')(sequelize, DataTypes);
const Comment = require('./Comment')(sequelize, DataTypes);
const Message = require('./Message')(sequelize, DataTypes);
const Post = require('./Post')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);

// Define associations between models if you have any

module.exports = {
  sequelize,
  Application,
  Comment,
  Message,
  Post,
  User,
};
