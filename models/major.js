'use strict';
const {Model, CreatedAt} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Majors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Majors.init({
    major_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Major',
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return Majors;
};