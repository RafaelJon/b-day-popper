'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Birthday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Birthday.init({
    channelId: DataTypes.STRING,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    timezone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Birthday',
  });
  return Birthday;
};