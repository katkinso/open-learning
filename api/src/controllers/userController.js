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
                res.json(errors.message)
            })
        } else {
            passport.authenticate("local")(req, res, () => {
                res.json({authenticated: true});
            })
        }
        });
  },
  authenticate(req, res, next){
    passport.authenticate("local")(req, res, function () {

      if(!req.user){
        res.json({authenticated: false});
      } else {
        res.json(req.session.passport);
      }
    })
  },
  logout(req, res, next){
    req.logout();
    res.status(200).send("logged out")
  },
  protectedTest(req, res, next){
    res.json({protected: "got to protected route"});
  }
}