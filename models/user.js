module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
    },
  });

  // User.associate = function(models) {
  //     User.belongsTo(models.Country);
  //   };

  User.associate = function (models) {
    User.belongsToMany(models.Thing, {
      through: "UserThings",
      foreignKey: "userId",
    });
  };
  return User;
};
