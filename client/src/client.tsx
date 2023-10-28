import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

import { GraphQLClient } from "graphql-request";

import { getSdk } from "@/gql";

const endpoint = "http://localhost:8000/graphql";

export const apollo = new ApolloClient({
  uri: endpoint,
  cache = new InMemoryCache(),
});

const graphQLClient = new GraphQLClient(endpoint);
export const sdk = getSdk(graphQLClient);
