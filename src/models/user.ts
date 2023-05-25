"use strict";
import { DataTypes, UUIDV4, Model, Sequelize } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  other_info: string;
}

export default (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string;
    email: string;
    name!: string;
    password!: string;
    other_info!: string;

    static associate(models: any) {
      User.hasMany(models.Resource, {
        through: "ResourceOwners",
      });
    }
  }
  User.init(
    {
      id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
