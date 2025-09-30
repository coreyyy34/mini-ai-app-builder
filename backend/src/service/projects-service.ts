import {
	Project,
	ProjectId,
	ProjectSpecifications,
	ProjectSummary,
} from "@coreyyy34/mini-ai-app-builder-shared";
import { ProjectDocument, ProjectsModel } from "../model/project";

export class ProjectsService {
	static async getSummaries(): Promise<ProjectSummary[]> {
		const projects = await ProjectsModel.find(
			{},
			{
				_id: 1,
				"specifications.name": 1,
				"specifications.description": 1,
			}
		)
			.sort({ _id: -1 })
			.lean();

		return projects.map((p: any) => ({
			id: p._id.toString(),
			name: p.specifications.name,
			description: p.specifications.description,
		}));
	}

	static async getProjectById(id: ProjectId): Promise<Project | null> {
		const project = await ProjectsModel.findById(
			id
		).lean<ProjectDocument>();
		if (!project) return null;

		return {
			id: project._id.toString(),
			specifications: project.specifications,
			components: project.components,
		};
	}

	static async saveCapturedRequirements(
		specifications: ProjectSpecifications,
		id?: ProjectId
	): Promise<string> {
		if (id) {
			const updatedProject = await ProjectsModel.findByIdAndUpdate(
				id,
				{
					specifications,
					components: [], // clear components on update
				},
				{ new: true, upsert: false }
			).exec();

			if (!updatedProject) {
				throw new Error(`Project with id ${id} not found`);
			}

			return updatedProject._id.toString();
		} else {
			const model = new ProjectsModel({ specifications });
			const savedProject = await model.save();
			return savedProject._id.toString();
		}
	}

	static async updateComponents(
		id: ProjectId,
		components: Project["components"]
	): Promise<void> {
		await ProjectsModel.findByIdAndUpdate(id, { components });
	}
}
