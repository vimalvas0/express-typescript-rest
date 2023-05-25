// import express, { Request, Response, Router } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// // import User from "../models/User"; // Assuming you have a User model defined

// const router: Router = express.Router();

// // POST /auth/login
// router.post("/getAll", async (req: Request, res: Response) => {
//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne();
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Verify the password
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" });

//     // Send the token as a response
//     res.json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // POST /auth/login
// router.post("/login", async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists in the database
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Verify the password
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" });

//     // Send the token as a response
//     res.json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // POST /auth/register
// router.post("/register", async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists in the database
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user record in the database
//     const newUser = await User.create({ email, password: hashedPassword });

//     // Generate a JWT token
//     const token = jwt.sign({ userId: newUser.id }, "your_secret_key", { expiresIn: "1h" });

//     // Send the token as a response
//     res.status(201).json({ token });
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// export default router;
