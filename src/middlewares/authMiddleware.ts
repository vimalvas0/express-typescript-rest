import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (req: any, res: any, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "secret_key", (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Perform additional authorization logic if needed
    req.user = user; // Attach the user object to the request
    next();
  });
};
