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
    _id: ID
    pizzaName: String
    pizzaType: String
    foodImage: String
    quantity: Int
    pizzaPrice: Float
    category: Category
  }

type Auth {
    token: ID!
    customer: Customer
}

type Query {
    customers: [Customer]
    customer(_id: ID!): Customer
}

type Mutation {
    addCustomer(firstName: String!,lastName: String!, password: String!, email: String!): Customer
}
`
// TODO: Will need to provide token once auth is working for Mutation