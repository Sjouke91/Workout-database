"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class exersize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  exersize.init(
    {
      name: DataTypes.STRING,
      reps: DataTypes.INTEGER,
      sets: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      workout: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "exersize",
    }
  );
  return exersize;
};
