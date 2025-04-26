const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Item = require('./Item')(sequelize, Sequelize);

module.exports = db;
