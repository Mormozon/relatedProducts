const Sequelize = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('product', {
  picture_url: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  average_rating: {
    type: Sequelize.DECIMAL,
  },
  reviews: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL,
  }
});

module.exports = Product;