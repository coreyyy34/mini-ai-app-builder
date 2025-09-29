import { Request, Response } from "express";
import { captureRequirementsFromPrompt } from "../service/capture-service";
import { CaptureSpecificationsRequest } from "@coreyyy34/mini-ai-app-builder-shared";

export const captureRequirementsHandler = async (
	req: Request,
	res: Response
) => {
	const { prompt } = req.body as CaptureSpecificationsRequest;

	try {
		const project = await captureRequirementsFromPrompt(prompt);
		res.status(200).json({ project });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
