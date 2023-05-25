import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
const app = express();

import db from "./models";

app.use(bodyParser.json());

app.use("/hello-world", (req: Request, res: Response) => {
  type JsonResponse = { message: string; status: string };
  let resp: JsonResponse = {
    message: "Hello world",
    status: "HW1",
  };

  type ResponseStatus = number;

  let respStatus: ResponseStatus = 200;

  return res.status(respStatus).send(resp);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

db.sequelize.sync().then(() => {
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
