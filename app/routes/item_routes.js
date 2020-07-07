// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
// const passport = require('passport')

// pull in Mongoose model for examples
const GroceryList = require('../models/grocery-list')
// const ItemList = require('../modles/item_list')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

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

// UPDATE
// PATCH /reviews/:id
router.patch('/items/:id', (req, res, next) => {
  const id = req.params.id
  console.log('this is param id', id)
  const itemData = req.body.item
  console.log('this is itemData ', itemData)
  GroceryList.findOne({
    'items._id': id
  })
    .then(handle404)
    .then(groceryList => {
      const item = groceryList.items.id(id)
      item.set(itemData)
      return groceryList.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /reviews/:id
router.delete('/items/:id', (req, res, next) => {
  const id = req.params.id
  GroceryList.findOne({ 'items._id': id })
    .then(handle404)
    .then(groceryList => {
      groceryList.items.id(id).remove()
      return groceryList.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
