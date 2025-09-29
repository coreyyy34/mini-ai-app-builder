import { Request, Response } from "express";
import { captureRequirementsFromPrompt } from "../service/capture-service";

export const captureRequirementsHandler = async (
	req: Request,
	res: Response
) => {
	const prompt = req.body.prompt;

	try {
		const requirements = await captureRequirementsFromPrompt(prompt);
		res.status(200).json({ requirements });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
