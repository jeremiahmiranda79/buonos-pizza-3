const { gql } = require("apollo-server-express");

module.exports = gql`
  type Customer {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
  }

  type Order {
    _id: ID
    totalPrice: Float
    customer: Customer
    pizzas: [Pizza]
  }

  type Pizza {
    _id: ID!
    pizzaName: String
    pizzaType: String
    pizzaSize: String
    foodImage: String
    pizzaPrice: Float
    quantity: Int
    toppings: [Toppings]
  }

  type Toppings {
    _id: ID!
    toppingName: String
    toppingPrice: Float
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    customer: Customer
  }

  type Query {
    customers: [Customer]
    customer(_id: ID!): Customer
    order(_id: ID!): Order
    pizzas(order: ID): [Pizza]
    pizza(_id: ID!): Pizza
    topping(_id: ID!): Toppings
    toppings: [Toppings]
  }

  type Mutation {
    addCustomer(
      firstName: String!
      lastName: String!
      password: String!
      email: String!
    ): Auth

    login(email: String!, password: String!): Auth

    addPizza(
      pizzaName: String!
      pizzaType: String!
      pizzaSize: String!
      foodImage: String
      quantity: Int!
      pizzaPrice: Float!
      toppings: [ID]
    ): Pizza

    addTopping(toppingName: String, toppingPrice: Float): Toppings

    addOrder(pizzas: [ID], customer: ID!): Order
  }
`;
