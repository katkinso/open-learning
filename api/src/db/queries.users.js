const User = require("./models").User;
const Session = require("./models").Session;
const UserSessions = require("./models").UserSessions;
const moment = require('moment')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const bcrypt = require("bcryptjs");

module.exports = {
  createUser(newUser, callback){
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);
    return User.create({
      firstName:newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getUser(id, callback){
    return User.findByPk(id, {
      include: [{
        model: Session,
        as: "sessions",
        required: false,
        through: {attributes: []},
        where: {
          dateTime: {
            [Op.gte]: moment()
          }
        }
      }],
        order: [[{model: Session, as: 'sessions'}, 'dateTime']],
        
    })
    .then((user) => {
      const { id, firstName, lastName, email, sessions } = user;
      callback(null, {id, firstName, lastName, email, sessions});
    })
    .catch((err) => {
      callback(err);
    })
  }
}