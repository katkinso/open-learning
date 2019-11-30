const sessionQueries = require("../db/queries.sessions.js");
var request = require('request');

module.exports = {
    create(req, res, next){

        let newSession = {
            name: req.body.name,
            description: req.body.description,
            dateTime: req.body.dateTime,
            totalSpots: req.body.totalSpots
        };

        sessionQueries.createSession(newSession, (err, session) => {
          if(err){
              err.errors.map((errors) => {
                  res.status(403).json(errors.message)
              })
          } else {
              res.json(session);
          }
        });
   },
   all(req, res, next){

      sessionQueries.getSessions(req, (err, sessions) => {
        if(err){
            res.json({error: "No sessions found"})
        } else {
            res.json(sessions);
        }
      });
  },
  detail(req, res, next){

      sessionQueries.getSession(req.params.id, (err, session) => {
        if(err){
            res.json({error: "Session not found"})
        } else {
            res.json(session);
        }
      });
  },
  registration(req, res, next){

        let newUserSession = {
            userId: req.body.userId,
            sessionId: req.body.sessionId
        };

        sessionQueries.registration(newUserSession, (err, session) => {
            if(err){
                res.status(403).json(err)
            } else {
                res.json(session);
            }
        });
   },
   delete(req, res, next){

        sessionQueries.delete(req.params.id, (err, session) => {
            if(err){
                res.json({error: "Session not found"})
            } else {
                res.json(session);
            }
        });
    },
  
}