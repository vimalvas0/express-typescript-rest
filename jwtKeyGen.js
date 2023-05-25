const crypto = require("crypto");

// Generate a random string for JWT secret key
const generateJwtSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Usage
const jwtSecretKey = generateJwtSecretKey();
console.log(jwtSecretKey);
