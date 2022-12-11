import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export const GET_USER_CLIENTS = gql`
  query getClients($id: ID!) {
    clients(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
