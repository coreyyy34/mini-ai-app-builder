import { Request, Response } from "express";
import { generateUiFromRequirements } from "../service/generate-ui-service";
import { AppRequirements } from "@coreyyy34/mini-ai-app-builder-shared";

export const generateUiHandler = async (req: Request, res: Response) => {
	const requirements = req.body.requirements as AppRequirements;

	try {
		const appComponents = await generateUiFromRequirements(requirements);
		res.status(200).json(appComponents);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
