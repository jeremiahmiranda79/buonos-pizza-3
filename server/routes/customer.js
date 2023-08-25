const express = require('express');
const Customer = require('../model/customerModel') 
const router = express.Router();
const { 
    createCustomer
} = require('../controllers/customerControllers')

// GET all customers 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all customers'})
})

// GET a single customer
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single customer'})
})

// POST a new customer
router.post('/', createCustomer )

// DELETE an customer
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an customer'})
})

// UPDATE an customer
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an customer'})
})


module.exports = router