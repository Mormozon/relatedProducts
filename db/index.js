const Sequelize = require('sequelize');
const sequelize = new Sequelize('related_products', 'krauss', 'password', {
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
  .then(function() {console.log('sequelize successful')})
  .catch(function(err) {console.log('sequelize failed', err)});
module.exports = sequelize;
