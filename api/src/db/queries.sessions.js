const Session = require("./models").Session;

module.exports = {
  createSession(newSession, callback){
    return Session.create(newSession)
    .then((session) => {
      callback(null, session);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getSession(id, callback){
    return Session.findByPk(id)
    .then((session) => {
      callback(null, session);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getSessions(req, callback){
    return Session.findAll({
      order: [
        ['dateTime', 'DESC'],
        ['name', 'DESC']
      ]
    })
    .then((sessions) => {
      callback(null, sessions);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getSession(id, callback){
    return Session.findByPk(id)
    .then((session) => {
      callback(null, session);
    })
    .catch((err) => {
      callback(err);
    })
  }
}