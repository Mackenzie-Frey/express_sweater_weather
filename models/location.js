'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    Location.belongsToMany(models.User, {through: 'Favorites'});
  };
  return Location;
};
