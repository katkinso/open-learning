'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    description: DataTypes.STRING,
    totalSpots: DataTypes.INTEGER,
    dateTime: DataTypes.DATE
  }, {});
  Session.associate = function(models) {
    Session.belongsToMany(models.User, {
      through: 'UserSessions',
      foreignKey: 'sessionId',
      as: "sessions",
      onDelete: 'CASCADE'
    });
  };
  return Session;
};