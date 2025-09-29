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

export const projectByIdHandler = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const project = await ProjectsService.getProjectById(id);
		res.status(200).json(project);
	} catch (error: any) {
		res.status(500).json({ error: "Internal server error" });
	}
};
