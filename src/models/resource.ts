"use strict";
const { Model } = require("sequelize");

interface ResourceAttributes {
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Resource extends Model<ResourceAttributes> implements ResourceAttributes {
    name!: string;

    static associate(models: any) {
      Resource.belongsTo(models.User, {
        through: "ResourceOwners",
      }); // define association here
    }
  }

  Resource.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Resource",
    }
  );

  return Resource;
};
