module.exports = {
  toggleFavoriteSession: (parents, {id}, {dataSources}, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },
};