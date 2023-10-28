import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import type { AppProps } from "next/app";

const client = new ApolloClient({
  uri: "http://localhost/graphql:8000",
  cache: new InMemoryCache(),
});

function Rewekey({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
