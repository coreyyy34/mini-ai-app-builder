import { Request, Response } from "express";
import { captureRequirementsFromPrompt } from "../service/capture-service";

export const captureRequirementsHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const requirements = await captureRequirementsFromPrompt("mock prompt");
		res.status(200).json({ requirements });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
