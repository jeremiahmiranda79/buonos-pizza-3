const { gql } = require('apollo-server-express');

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
    pizzas: [ Pizza ]
}

type Pizza {
    _id: ID!
    pizzaName: String
    pizzaType: String
    pizzaSize: String
    foodImage: String
    pizzaPrice: Float
    quantity: Int
  }
}


type Auth {
    token: ID
    customer: Customer
}

type Query {
    customers: [Customer]
    customer(_id: ID!): Customer
    pizzas: [Pizza]
    order(_id: ID!): Order
    pizzas(order: ID): [ Pizza ]
    pizza(_id: ID!): Pizza
}

type Mutation {
    addCustomer(firstName: String!,lastName: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
    addCustomer(firstName: String!,lastName: String!, password: String!, email: String!): Customer
    addPizza(pizzaName: String!, pizzaType: String!, pizzaSize: String!,foodImage: String, quantity: Int!, pizzaPrice: Float!): Pizza
    addOrder(pizzas: [ID]!, customer: ID!): Order
}
`
