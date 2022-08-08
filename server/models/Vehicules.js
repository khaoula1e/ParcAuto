module.exports = (sequelize, DataTypes) => {
  const Vehicules = sequelize.define("Vehicules", {
    matricule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kilometrage: {
      type: DataTypes.REAL,
      allowNull: false,
      },
    dateVisite: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    vidange: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      },
  });

  
  return Vehicules;
};