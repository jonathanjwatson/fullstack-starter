module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      fullName: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(10,2)
      },
    });

    User.associate = function(models) {
        User.belongsTo(models.Country);
      };
    return User;
  };
  