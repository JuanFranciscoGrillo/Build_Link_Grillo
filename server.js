const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers'); // Adjust if your routes are defined differently
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Importing additional necessary modules
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({
  helpers: require('./utils/helpers'), // Using custom helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret', // Use an environment variable for the secret
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}));

// Use routes
app.use(routes);

// Sync sequelize models to the database, then start the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
