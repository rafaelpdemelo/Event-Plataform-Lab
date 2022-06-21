import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl51co08tj01xpbzyj4evw/master',
  cache: new InMemoryCache()
})