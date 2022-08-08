module.exports = (sequelize, DataTypes) => {
  const Reparations = sequelize.define("Reparations", {
    vehicule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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