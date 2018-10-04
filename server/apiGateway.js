// const { ApolloServer, gql } = require('apollo-server-express');
// const { ApolloEngine } =require("apollo-engine");
// const { makeExecutableSchema } = require('graphql-tools');
// const { typeDefs, resolvers } = require("./schema.js");
// const express = require("express");
// require('dotenv').config();

// const app = express();

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// const server = new ApolloServer({
//   schema,
//   tracing: true,
//   cacheControl: true,

//   // By setting this to "false", we avoid using Apollo Server 2's
//   // integrated metric reporting and fall-back to using the Apollo
//   // Engine Proxy (running separately) for metric collection.
//   engine: { apiKey: `${process.env.APOLLO_ENG_KEY}` },
// });

// server.applyMiddleware({ app });

// const engine = new ApolloEngine({
//   apiKey: `${process.env.APOLLO_ENG_KEY}`,
//   // apiKey: 'service:ToneDev:npVm4C2kEK8x--VWINxt4A',

// });

// engine.listen({
//   port: 4000,
//   expressApp: app,
// });
