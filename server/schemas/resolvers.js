const { Customer, Pizza, Order, Toppings } = require("../model");
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
      return await Pizza.find({});
    },
    pizza: async (_, { _id }) => {
      return await Pizza.findOne({ _id });
    },
    topping: async (_, { _id }) => {
      return await Toppings.findOne({ _id });
    },
    order: async (_, args) => {
      return await Order.findById(args).populate('pizzas').populate('customer');
    },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate("products");

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`],
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: "usd",
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items,
    //     mode: "payment",
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });

    //   return { session: session.id };
    // },
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
