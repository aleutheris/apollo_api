const { ApolloServer, gql } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');

const typeDefs = gql`
  type Query {
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to tags based system in the future..."),
    level: String
}`

const resolvers = {
  Query: {
    sessions: (parents, args, {dataSources}, info) => {
      return dataSources.sessionsAPI.getSessions();
    }
  }
};

const dataSources = () => ({
  sessionsAPI: new SessionsAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
  .listen({port: process.env.PORT || 4000 })
  .then(({url}) => {
    console.log(`GraphQL running at ${url}`);
  });
