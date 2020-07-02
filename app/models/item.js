const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})
module.exports = itemSchema
