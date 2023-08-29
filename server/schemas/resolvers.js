const { Customer, Pizza, Order } = require('../model')

// Look at documentation for error handling on Apollo
module.exports = {
    Query: {
        customers: async () => {
            return await Customer.find({})
        },
        customer: async (_, { _id }) => {
            return await Customer.findOne({_id})
            // return await Customer.findById({_id})            
        },
        pizzas: async () => {
            return await Pizza.find({})
        },
        pizza: async (_, { _id }) => {
            return await Pizza.findOne({_id})            
        },
        order: async (_, args) => {
            return await Order.findById(args)
        },
       
    },

    Mutation: {
        addCustomer: async (_, args) => {
            return await Customer.create(args)
        },
        addOrder: async (_, args) => {
            return await Order.create(args)
        },
        addPizza: async (_, args) => {
            return await Pizza.create(args)
        }
    }
}
