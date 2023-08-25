const { Customer } = require('../model')

// Look at documentation for error handling on Apollo
module.exports = {
    Query: {
        customers: async () => {
            return await Customer.find({})
        },

        customer: async (parent, { _id }) => {
            return await Customer.findOne({_id})
        }
    },

    Mutation: {
        addCustomer: async (parent, args) => {
            return await Customer.create(args)
        }
    }
}
