import { Request, Response } from "express";
import { ProjectsService } from "../service/projects-service";

export const projectsHandler = async (req: Request, res: Response) => {
	try {
		const summaries = await ProjectsService.getSummaries();
		res.status(200).json(summaries);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
