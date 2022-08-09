module.exports = (sequelize, DataTypes) => {
  const Reparations = sequelize.define("Reparations", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    Description: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      },
  });

  
  return Reparations;
};