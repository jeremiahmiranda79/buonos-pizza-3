const { Customer, Pizza } = require("../model");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// Look at documentation for error handling on Apollo
const resolvers = {
  Query: {
    customers: async () => {
      return await Customer.find({});
    },
    pizzas: async () => {
      return await Pizza.find({});
    },

    customer: async (_, { _id }) => {
      return await Customer.findOne({ _id });
      // return await Customer.findById({_id})
    },
  },

  Mutation: {
    addCustomer: async (_, args) => {
      return await Customer.create(args);
    },
    login: async (parent, { email, password }) => {
      const customer = await Customer.findOne({ email });
      if (!customer) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await customer.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(customer);
      return { token, customer };
    },
  },
};
module.exports = resolvers;