const mongoose = require('mongoose')
const itemSchema = require('./item')
const groceryListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  items: [itemSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('GroceryList', groceryListSchema)
