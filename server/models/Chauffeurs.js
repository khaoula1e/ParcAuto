module.exports = (sequelize, DataTypes) => {
  const Chauffeurs = sequelize.define("Chauffeurs", {
    CIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateDebut: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    dateFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
  });

  
  return Chauffeurs;
};