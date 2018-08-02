const { username, password } = require('../config.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('related_products', username, password, {
  host: 'localhost',
  dialect: 'postgres',

  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.authenticate()
  .then(function() {
    console.log(
      '       ....\n',
      '      |  |\n',
      '     ......        Sequelize sequentially sequenced.\"\n',
      '\\    ( \'xQ)          Meowvelous!\n',
      ' \\(      )                              -sir cat\n',
      '   VV  VV');
  })
  .catch(function(err) {console.log('sequelize failed', err)});
module.exports = sequelize;
