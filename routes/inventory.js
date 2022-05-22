const express = require('express')


const router = express.Router()


// import controller methods
const {create, list, read, update, remove, updateInventory} = require('../controllers/inventory')

router.post('/inventory', create)
router.get('/inventories', list)
router.get('/inventory/:slug', read)
router.put('/inventory/:slug', update)
router.delete('/inventory/:slug', remove)
router.put('/inventory/update/:slug', updateInventory)

module.exports = router