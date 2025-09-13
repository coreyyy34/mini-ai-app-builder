import express, { Application } from "express";
import rootRouter from "./routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
