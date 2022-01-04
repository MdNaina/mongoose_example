const mongoose = require('mongoose');

const stringProperty = {
    type: String,
    required: true
}

const integerProperty = {
    type: Number,
    required: true,
}

const productSchema = new mongoose.Schema({
    name: stringProperty,
    description: stringProperty,
    price: integerProperty,
    countInStock: integerProperty,
    imageUrl: stringProperty
})

const Product = mongoose.model('product', productSchema);

module.exports = Product
