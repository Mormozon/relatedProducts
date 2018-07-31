const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const faker = require('faker');
//const gen = require('../dataGenerator.js');
//const sequelize = require('../db/index');
const Product = require('../db/model.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../')));

app.get('/api/related', function(req, res) {
  Product.findAll().then(data => {
    res.status(200).send(data.map(item => item.dataValues));
  });
});

// app.get('/fake', function(req, res) {
//   const data = gen();
//   Product.sync({force: true}).then(function() {
//     data.forEach(model => Product.create(model));
//   })
//     .then(function() { console.log('ok'); res.status(200).end(); });
// })


// app.get('/check', function(req, res) {
//   Product.findAll().then(items => console.log('----------', items.length)); //items => items.forEach(item => console.log(item.dataValues))
// })


app.listen(1337, function() {console.log('--Server Activated--')});

