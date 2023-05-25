import { Sequelize } from "sequelize-typescript";

// Create a new Sequelize instance
const sequelize = new Sequelize({
  database: "postgres",
  username: "postgres",
  password: "mysecretpassword",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  models: [__dirname + "../models"],
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error: Error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
