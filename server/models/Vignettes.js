module.exports = (sequelize, DataTypes) => {
  const Vignettes = sequelize.define("Vignettes", {
    vehicule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeEssence: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    prix: {
      type: DataTypes.REAL,
      allowNull: false,
      },
    kilometrage: {
      type: DataTypes.REAL,
      allowNull: false,
      },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    stationCode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      },
  });

  
  return Vignettes;
};