const faker = require('faker');

function generateData() {
  const fakeData = [];

  for (let i = 0 ; i < 100; i++) {
    fakeData.push(generateModel());
  }

  return fakeData;
}

function generateModel() {
  const model = {};
  model.picture_url = faker.image.fashion();
  model.name = faker.commerce.productName();
  model.average_rating = faker.finance.amount(0, 5, 1);
  model.reviews = faker.random.number(99999);
  model.price = faker.commerce.price();
  
  return model;
}

module.exports = generateData;