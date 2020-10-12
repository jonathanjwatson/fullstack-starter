module.exports = function (sequelize, DataTypes) {
  const UserThings = sequelize.define(
    "UserThings",
    {
      userId: DataTypes.INTEGER,
      thingId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return UserThings;
};
