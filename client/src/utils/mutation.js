import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      customer {
        _id
        firstName
        lastName
        password
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addCustomer(
    $firstName: String!
    $lastName: String!
    $password: String!
    $email: String!
  ) {
    addCustomer(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      customer {
        _id
        email
        firstName
        lastName
        password
      }
    }
  }
`;