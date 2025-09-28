import express, { Application } from "express";
import cors from "cors";
import rootRouter from "./routes";

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const app: Application = express();

app.use(
	cors({
		origin: CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
