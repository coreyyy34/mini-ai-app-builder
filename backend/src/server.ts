import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
