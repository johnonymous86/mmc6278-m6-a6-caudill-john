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
  // Query to fetch all items in the cart, joining with inventory data
  const [cartItems] = await db.query(`
    SELECT
      i.name,
      i.id AS inventoryId,
      i.quantity AS inventoryQuantity,
      i.image,
      c.id,
      c.quantity,
      i.price,
      i.price * c.quantity AS calculatedPrice
    FROM cart c 
    LEFT JOIN inventory i ON c.inventory_id = i.id;
  `)
  
  // Calculate the total price for all items in the cart
  const cartTotal = cartItems
    .reduce((total, item) => item.calculatedPrice + total, 0)
    .toFixed(2)

  // Fetch the cart count for the header/navigation (optional, but good practice)
  const [[{cartCount}]] = await db.query('SELECT SUM(quantity) AS cartCount FROM cart;')

  res.render('cart', {
    cartItems,
    cartTotal,
    cartCount // Include cartCount in the response
  })
})

module.exports = router
