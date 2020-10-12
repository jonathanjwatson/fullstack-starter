module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define("Country", {
    name: {
      type: DataTypes.STRING,
    },
    continentName: {
      type: DataTypes.STRING,
    },
  });

//   Country.associate = function (models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Country.belongsToMany(models.User);
//   };
  return Country;
};
