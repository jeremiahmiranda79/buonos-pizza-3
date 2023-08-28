const { Customer } = require('../model')

// Look at documentation for error handling on Apollo
module.exports = {
    Query: {
        customers: async () => {
            return await Customer.find({})
        },

        customer: async (_, { _id }) => {
            return await Customer.findOne({_id})
            // return await Customer.findById({_id})            
        }
    },

    Mutation: {
        addCustomer: async (_, args) => {
            return await Customer.create(args)
        }
    }
}
