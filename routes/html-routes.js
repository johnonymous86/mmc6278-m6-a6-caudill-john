const router = require('express').Router()
const db = require('../db')
const path = require('path')

router.get('/', async (req, res) => {
  const [inventory] = await db.query('SELECT * FROM inventory;') 
  const [[{cartCount}]] = await db.query('SELECT SUM(quantity) AS cartCount FROM cart;')

  res.render('index', {
    inventory, 
    cartCount 
  })
})


router.get('/product/:id', async (req, res) => {
  const [[product]] = await db.query(
    'SELECT * FROM inventory WHERE id=?;',
    [req.params.id]
  )
  const [[{cartCount}]] = await db.query('SELECT SUM(quantity) AS cartCount FROM cart;')

  res.render('product', {
    product,
    cartCount
  })
})

router.get('/cart', async (req, res) => {
  const [cartItems] = await db.query()

  const cartTotal = cartItems 
    .reduce((total, item) => item.calculatedPrice + total, 0)
    .toFixed(2)

  res.render('cart', {
    cartItems, 
    cartTotal  
  })
})

module.exports = router
