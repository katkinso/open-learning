'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSessions = sequelize.define('UserSessions', {
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Session",
        key: "id",
        as: "sessionId",
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
          as: "userId",
        }
      }
  }, {});
  UserSessions.associate = function(models) {
    // associations can be defined here
    // UserSessions.belongsTo(models.User, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE"
    // });

    // UserSessions.belongsTo(models.Session, {
    //   foreignKey: "sessionId",
    //   onDelete: "CASCADE"
    // });
  };
  return UserSessions;
};