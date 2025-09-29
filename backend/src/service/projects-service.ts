import { ProjectSummary } from "@coreyyy34/mini-ai-app-builder-shared";
import { ProjectsModel } from "../model/project";

export class ProjectsService {
	static async getSummaries(): Promise<ProjectSummary[]> {
		const projects = await ProjectsModel.find(
			{},
			{ _id: 1, name: 1 }
		).lean();
		return projects.map((p) => ({ id: p._id.toString(), name: p.name }));
	}
}
