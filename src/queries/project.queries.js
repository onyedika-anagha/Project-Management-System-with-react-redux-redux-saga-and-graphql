import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query getProjects {
      projects {
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
  `,
  GET_USER_PROJECTS = gql`
    query getProjects($id: ID!) {
      projects(id: $id) {
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
