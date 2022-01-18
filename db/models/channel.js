'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: DataTypes.STRING,
    tvShowId: DataTypes.INTEGER,
    coverPicture: DataTypes.STRING
  }, {});
  Channel.associate = function(models) {
    // associations can be defined here
  };
  return Channel;
};