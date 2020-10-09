module.exports = function (sequelize, DataTypes) {
  const Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  });
  return Thing;
};
