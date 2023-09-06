const { Customer, Pizza, Order, Toppings } = require("../model");
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/Auth');

// Look at documentation for error handling on Apollo
module.exports = {
  Query: {
    customers: async () => {
      return await Customer.find({});
    },
    customer: async (_, { _id }) => {
      return await Customer.findOne({ _id });
    },
    pizzas: async () => {
      return await Pizza.find().populate('toppings');
    },
    pizza: async (_, { _id }) => {
      return await Pizza.findOne({ _id }).populate('toppings');
    },
    topping: async (_, { _id }) => {
      return await Toppings.findById( _id );
    },
    toppings: async () => {
      return await Toppings.find();
    },
    order: async (_, args) => {
      return await Order.findById(args).populate('pizzas').populate('customer');
    },
  },

  Mutation: {
    addCustomer: async (_, args) => {
      return await Customer.create(args);
    },
    addOrder: async (_, args) => {
      console.log('This is my args: ', args);
      const newOrder = await Order.create(args);
      console.log('This is my newOrder: ', newOrder);
      return (await newOrder.populate('pizzas')).populate('customer')
    },
    addPizza: async (_, args) => {
      return await Pizza.create(args);
    },
    addTopping: async (_, args) => {
      return await Toppings.create(args);
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