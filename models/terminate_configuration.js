const { Op } = require("sequelize");
const { intersection } = require("lodash");
const coreModel = require("./../core/models");

module.exports = (sequelize, DataTypes) => {
  const terminate_configurations = sequelize.define(
    "terminate_configurations",
    {
      p: DataTypes.STRING,
      h: DataTypes.STRING,
      count: DataTypes.INTEGER,
    }
  );
};
