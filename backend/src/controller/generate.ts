import { Request, Response } from "express";
import { generateUiFromRequirements } from "../service/generate-ui-service";
import {
	ApiError,
	CaptureSpecificationsRequest,
	ProjectId,
} from "@coreyyy34/mini-ai-app-builder-shared";

export const generateUiHandler = async (req: Request, res: Response) => {
	const { id } = req.body as CaptureSpecificationsRequest;

	try {
		const project = await generateUiFromRequirements(id as ProjectId);
		res.status(200).json({ project });
	} catch (error) {
		if (error instanceof ApiError) {
			res.status(400).json({ error: error.message });
			return;
		}
		res.status(500).json({ error: "Internal server error" });
	}
};
