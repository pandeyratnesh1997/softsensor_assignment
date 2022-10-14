const mongoose = require('mongoose');

const connection = mongoose.connect("https://fakestoreapi.com/products")

module.exports = connection;
