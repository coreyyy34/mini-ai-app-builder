import { Request, Response } from "express";
import { generateUiFromRequirements } from "../service/generate-ui-service";
import { captureRequirementsFromPrompt } from "../service/capture-service";

export const generateUiHandler = async (req: Request, res: Response) => {
	try {
		const requirements = await captureRequirementsFromPrompt("mock prompt");
		const generatedUi = await generateUiFromRequirements(requirements);
		res.status(200).json(generatedUi);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
