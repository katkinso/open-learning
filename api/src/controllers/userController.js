const userQueries = require("../db/queries.users.js");
const passport = require("passport");
var request = require('request');

module.exports = {
    register(req, res, next){

        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };

        userQueries.createUser(newUser, (err, user) => {
        if(err){
            err.errors.map((errors) => {
                res.status(403).json(errors.message)
            })
        } else {
            passport.authenticate("local")(req, res, () => {
                const {id, firstName, lastName, email } = req.user;
                res.json({id, firstName, lastName, email });
            })
        }
        });
  },
  authenticate(req, res, next){
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        res.status(401).res.json({authenticated: false});
      } else {
        const {id, firstName, lastName, email } = req.user;
        res.json({id, firstName, lastName, email });
      }
    })
  },
  logout(req, res, next){
    req.logout();
    res.json({status: "logged out"});
  },
  getUser(req, res, next){

      userQueries.getUser(req.params.id, (err, user) => {
        if(err || user == null){
          res.status(404).json({error: "user not found"});
        } else {
          res.json(user);
        }
      });
  },
  getMe(req, res, next){

      const { user } = req.session.passport;

      userQueries.getUser(user, (err, user) => {
        if(err || user == null){
          res.status(404).json({error: "user not found"});
        } else {
          res.json(user);
        }
      });
  },
  
  
  protectedTest(req, res, next){
    res.json({protected: "got to protected route"});
  },
  unprotectedTest(req, res, next){
    res.json({protected: "got to unprotected route"});
  }
}