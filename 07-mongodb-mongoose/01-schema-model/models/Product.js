const mongoose = require('mongoose');
const connection = require('../libs/connection');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categorySchema',
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  images: [String],
});

module.exports = connection.model('Product', productSchema);
