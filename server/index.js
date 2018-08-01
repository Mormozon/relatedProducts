const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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



require('../dataGenerator.js'); //comment this line to stop generating fake data



app.listen(1337, function() {console.log('--Server Activated--')});

