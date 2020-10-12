module.exports = function (sequelize, DataTypes) {
  const Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });

  Thing.associate = function (models) {
    Thing.belongsToMany(models.User, {
      through: "UserThings",
      foreignKey: "thingId",
    });
  };

  return Thing;
};
