const { gql } = require("apollo-server-express");

module.exports = gql`
enum SizeEnum {
  Small
  Medium
  Large
}  

enum PizzaName {
  Supreme
  Meatlover
  VeggieLover
  Pepperoni
  Cheeeeesssy
  Margherita
}

enum PizzaType {
  Sicilian
  Thin
  GlutenFree
  Cauliflower
}

enum PizzaTopppings {
  Pepperoni
  Ham
  Sausage
  Onions
  BlackOlives
  GreenPeppers
  Cheese
}

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
    pizzaName: [PizzaName]
    pizzaType: [PizzaType]
    pizzaSize: [SizeEnum]
    foodImage: String
    pizzaToppings: [Toppings]
    pizzaPrice: Float
    quantity: Int
  }

  type Toppings {
    _id: ID!
    toppingName: [PizzaTopppings]
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
      pizzaName: [PizzaName!]
      pizzaType: [PizzaType!]
      pizzaSize: [SizeEnum!]
      foodImage: String
      pizzaToppings: [Toppings]
      quantity: Int!
      pizzaPrice: Float!
    ): Pizza
    
    addTopping(
      toppingName: [PizzaTopppings]
      toppingPrice: Float
    ): Toppings

    addOrder(pizzas: [ID], customer: ID!): Order
  }
`;
