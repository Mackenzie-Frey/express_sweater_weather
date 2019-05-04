'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteCities = sequelize.define('FavoriteCities', {
    UserId: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  FavoriteCities.associate = function(models) {
    // FavoriteCities.belongsTo(model.User)
    // FavoriteCities.belongsTo(model.City)
  };
  return FavoriteCities;
};
