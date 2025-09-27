import express, { Application } from "express";
import cors from "cors";
import rootRouter from "./routes";

const app: Application = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	})
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
