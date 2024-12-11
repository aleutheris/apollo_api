module.exports =  {
  sessions: (parents, args, {dataSources}, info) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parents, {id}, {dataSources}, info) => {
    try {
      return dataSources.sessionAPI.getSessionById(id);
    } catch (error) {
      return {
        code: 'ERROR',
        message: 'An error occurred',
        token: '13423rhrfhefewe'
      };
    }
  },
  speakers: (parents, args, {dataSources}, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parents, {id}, {dataSources}, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
