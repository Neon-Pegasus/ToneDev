const { ApolloServer } = require('apollo-server');
const typeDefs = require('./twitSchema.js');
const resolvers = require('./twitResolvers.js');

const twitServer = new ApolloServer({
  typeDefs,
  resolvers,
});

twitServer.listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });