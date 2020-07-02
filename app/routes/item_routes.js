const express = require('express')
const router = express.Router()
// require restaurant model
const GroceryList = require('./../models/groceryList_routes')
const handle404 = require('./../lib/customErrors')
// CREATE
// POST /items/
router.post('/items', (req, res, next) => {
  console.log('this is item body', req.body.item)
  // get the item data from the body of the request
  const itemData = req.body.item
  // get the groceryList id from the body
  const groceryListId = itemData.groceryListId
  // find the groceryList from the groceryList body
  GroceryList.findById(groceryListId)
    .then(handle404)
    .then(groceryList => {
      // add item to groceryList
      groceryList.items.push(itemData)
      // save groceryList
      return groceryList.save()
    })
    // send responsne back to client
    .then(groceryList => res.status(201).json({groceryList: groceryList}))
    .catch(next)
})

module.exports = router
