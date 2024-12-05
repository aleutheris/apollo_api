module.exports =  {
  Query: {
    sessions: (parents, args, {dataSources}, info) => {
      return dataSources.sessionsAPI.getSessions(args);
    },
    sessionById: (parents, {id}, {dataSources}, info) => {
      return dataSources.sessionsAPI.getSessionById(id);
    },
    speakers: (parents, args, {dataSources}, info) => {
      return dataSources.speakerAPI.getSpeakers();
    },
    speakerById: (parents, {id}, {dataSources}, info) => {
      return dataSources.speakerAPI.getSpeakerById(id);
    },
  }
};
