import { AppComponents } from "@coreyyy34/mini-ai-app-builder-shared";
import { Document, model, Schema } from "mongoose";
import { formComponentSchema } from "./form-component-model";
import { tableComponentSchema } from "./table-component-model";

export interface ProjectDocument extends AppComponents, Document {}

const baseComponentSchema = new Schema(
	{ type: { type: String, required: true } },
	{ discriminatorKey: "type", _id: false }
);

baseComponentSchema.discriminator("form", formComponentSchema);
baseComponentSchema.discriminator("table", tableComponentSchema);

const appComponentsSchema = new Schema<ProjectDocument>(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		entities: [{ type: String }],
		roles: [{ type: String }],
		features: [{ type: String }],
		components: [baseComponentSchema],
	},
	{ versionKey: false }
);

export const AppComponentsModel = model<ProjectDocument>(
	"AppComponents",
	appComponentsSchema
);
