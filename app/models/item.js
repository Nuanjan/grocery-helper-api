const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  owner: {
    // References use the type ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // the name of the model to which they refer
    ref: 'User'
  }
}, {
  timestamps: true
})
module.exports = itemSchema
