import { gql } from "@apollo/client";

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      projectType
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $projectType: String!
    $clientId: ID!
    $description: String!
    $userId: ID!
  ) {
    addProject(
      name: $name
      projectType: $projectType
      clientId: $clientId
      description: $description
      userId: $userId
    ) {
      id
      name
      description
      projectType
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $projectType: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      projectType: $projectType
      description: $description
      status: $status
    ) {
      id
      name
      description
      projectType
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
