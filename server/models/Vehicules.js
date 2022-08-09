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
  Vehicules.associate = (models) => {
        Vehicules.hasMany(models.Vignettes, {
            onDelete: "cascade",
            
        });
        Vehicules.hasMany(models.Reparations, {
            onDelete: "cascade",
            
        })
    }

  
  return Vehicules;
};