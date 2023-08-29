const { gql } = require('apollo-server-express');

module.exports = gql`
type Customer {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
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

type Auth {
    token: ID
    customer: Customer
}

type Query {
    customers: [Customer]
    customer(_id: ID!): Customer
    pizzas: [Pizza]
    pizza(_id: ID!): Pizza
}

type Mutation {
    addCustomer(firstName: String!,lastName: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
}
`
