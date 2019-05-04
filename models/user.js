'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    api_key: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.City, {
      through: {
        model: FavoriteCities,
        unique: false
        // something here? for scope
      }
      // something here? for foreign key and constraits
    })
  };
  return User;
};
