const { ApolloServer, gql } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionsAPI: new SessionsAPI()
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  instrospection: false,
  playground: true,
 });

server
  .listen({port: process.env.PORT || 4000 })
  .then(({url}) => {
    console.log(`GraphQL running at ${url}`);
  });
