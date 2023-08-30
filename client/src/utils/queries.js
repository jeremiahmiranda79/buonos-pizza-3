import { gql } from '@apollo/client';

export const QUERY_PIZZAS = gql`
  query getPizzas {
    pizzas {
      _id
      pizzaName
      foodImage
      pizzaPrice
      quantity
    }
  }
`;