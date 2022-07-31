import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl65qd7r49g6301t5f85ta2jt/master',
  cache: new InMemoryCache()
})