const { gql } = require('apollo-server-express');

module.exports = gql`
type Customer {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
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