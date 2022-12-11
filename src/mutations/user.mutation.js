import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser(
    $name: String!
    $fullName: String!
    $password: String!
    $email: String!
  ) {
    registerUser(
      fullName: $fullName
      email: $email
      name: $name
      password: $password
    ) {
      id
      name
      fullName
      email
      password
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(email: $email, password: $password) {
      id
      name
      fullName
      email
      password
      token
    }
  }
`;
