const _ = require('lodash');

module.exports =  {
  Query: {
    sessions: (parents, args, {dataSources}, info) => {
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parents, {id}, {dataSources}, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parents, args, {dataSources}, info) => {
      return dataSources.speakerAPI.getSpeakers();
    },
    speakerById: (parents, {id}, {dataSources}, info) => {
      return dataSources.speakerAPI.getSpeakerById(id);
    },
  },
  Session: {
    async speakers(session, agrs, {dataSources}) {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter(speaker => {
        return _.filter(session.speakers, {id: speaker.id}).length > 0;
      });

      return returns;
    },
  },
};
