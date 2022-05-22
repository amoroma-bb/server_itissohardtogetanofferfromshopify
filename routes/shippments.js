const express = require('express')

const router = express.Router()


const {create, list, update} = require('../controllers/shippments')

router.post('/shippment/create', create)
router.get('/shippment', list)
router.put('/shippment/update', update)

module.exports = router