import { Request, Response } from "express";
import { ProjectSummary } from "@coreyyy34/mini-ai-app-builder-shared";

export const projectsHandler = async (req: Request, res: Response) => {
	const projectSummaries: ProjectSummary[] = [
		{
			id: "651f1c4b8f1e2a3d4c5b6789",
			name: "Task Manager Dashboard",
		},
		{
			id: "651f1c4b8f1e2a3d4c5b6790",
			name: "E-Commerce Product Catalog",
		},
		{
			id: "651f1c4b8f1e2a3d4c5b6791",
			name: "Fitness Tracker App",
		},
		{
			id: "651f1c4b8f1e2a3d4c5b6792",
			name: "Restaurant Ordering System",
		},
		{
			id: "651f1c4b8f1e2a3d4c5b6793",
			name: "Online Learning Platform",
		},
	];

	try {
		res.status(200).json(projectSummaries);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
