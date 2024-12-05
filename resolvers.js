module.exports =  {
  Query: {
    sessions: (parents, args, {dataSources}, info) => {
      return dataSources.sessionsAPI.getSessions(args);
    },
    sessionById: (parents, {id}, {dataSources}, info) => {
      return dataSources.sessionsAPI.getSessionById(id);
    }
  }
};
