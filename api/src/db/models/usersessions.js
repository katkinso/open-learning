'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSessions = sequelize.define('UserSessions', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
        as: "userId",
      }
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Session",
        key: "id",
        as: "sessionId",
      }
    }
  }, {});
  UserSessions.associate = function(models) {
    // associations can be defined here 
  };
  return UserSessions;
};