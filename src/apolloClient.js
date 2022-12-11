import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { AUTH_TOKEN } from "./utils/helper/constants";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const authLink = setContext((_, { header }) => {
  return {
    headers: {
      ...header,
      authorization: sessionStorage.getItem(AUTH_TOKEN),
    },
  };
});
const port =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000"
    : process.env.SERVER_PORT;
const httpLink = createHttpLink({
  uri: `${port}/graphql`,
  // credentials: "include",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  //   uri: "http://localhost:8080/graphql",
  cache,
});

export default client;
