const Customer = require('../model/customerModel')

// Get all customers
const getCustomers = async (req, res) => {
    const customers = await Customer.fint({})

    res.status(200).json(customers)
}

// Get a single customer


// Create a customer
const createCustomer = async (req, res) => {
    const { firstName, lastName, password, email } = req.body

    // Add document to the database
    try {
        const customer = await Customer.create({firstName, lastName, password, email})
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a customer


// Update a customer


module.exports = { createCustomer }