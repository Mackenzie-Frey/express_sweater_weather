'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    CityId: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    City.belongsToMany(models.User, {
      through: {
        model: FavoriteCities,
        unique: false
      }
    })
  };
  return City;
};
