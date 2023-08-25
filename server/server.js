require('dotenv').config()
const express = require('express');
const customers = require('./routes/customer')


// Express app
const app = express()
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to Buonos Pizza Ordering'})
// })
app.use('/api/customers', customers)

// Listen for requests
app.listen(PORT, () => {
    console.log(`Congrats you are listen on `, PORT)
})