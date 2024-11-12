import path from "node:path";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/configs";
import { ApiError } from "./errors/api-error";
import { superheroRouter } from "./routers/superhero.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/", superheroRouter);

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json(err.message);
  },
);

app.listen(config.APP_PORT, async () => {
  await mongoose.connect(config.MONGO_URL);
  console.log(`Server has started on PORT ${config.APP_PORT}`);
});
