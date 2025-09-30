import { Document, model, ObjectId, Schema } from "mongoose";
import { formComponentSchema } from "./form-component-model";
import { tableComponentSchema } from "./table-component-model";
import { Project } from "@coreyyy34/mini-ai-app-builder-shared";

export interface ProjectDocument extends Omit<Project, "id">, Document {
	_id: ObjectId;
}
const baseComponentSchema = new Schema(
	{
		type: { type: String, required: true },
		roles: {
			type: [String],
			required: true,
		},
	},
	{ discriminatorKey: "type", _id: false }
);

baseComponentSchema.discriminator("form", formComponentSchema);
baseComponentSchema.discriminator("table", tableComponentSchema);

const projectsSchema = new Schema<ProjectDocument>(
	{
		specifications: {
			name: { type: String, required: true },
			description: { type: String, required: true },
			entities: [{ type: String }],
			roles: [{ type: String }],
			features: [{ type: String }],
			message: [{ type: String }],
		},
		components: [baseComponentSchema],
	},
	{ versionKey: false }
);

export const ProjectsModel = model<ProjectDocument>("projects", projectsSchema);
