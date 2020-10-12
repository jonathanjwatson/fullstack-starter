module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define("Country", {
    name: {
      type: DataTypes.STRING,
    },
    continentName: {
      type: DataTypes.STRING,
    },
  });
  return Country;
};
