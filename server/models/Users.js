module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    CIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  
  return Users;
};