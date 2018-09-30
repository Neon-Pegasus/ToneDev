const { ApolloServer } = require('apollo-server');
const schema = require('./gh_schema');
const resolvers = require('./gh_resolvers');
import sequelize from ('sequelize');

const server = new ApolloServer({ schema, resolvers });

sequelize.sync().then(async () => {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
