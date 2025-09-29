import { Request, Response } from "express";
import { captureRequirementsFromPrompt } from "../service/capture-service";
import { ProjectsService } from "../service/projects-service";

export const captureRequirementsHandler = async (
	req: Request,
	res: Response
) => {
	const prompt = req.body.prompt;

	try {
		const requirements = await captureRequirementsFromPrompt(prompt);
		const id = await ProjectsService.saveCapturedRequirements(requirements);
		res.status(200).json({ id, requirements });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
