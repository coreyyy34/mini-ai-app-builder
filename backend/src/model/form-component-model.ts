import { inputTypes } from "@coreyyy34/mini-ai-app-builder-shared";
import { Schema } from "mongoose";

const formFieldComponentSchema = new Schema(
	{
		label: { type: String, required: true },
		inputType: { type: String, enum: inputTypes, required: true },
		placeholder: { type: String, required: true },
		required: { type: Boolean, default: false },
	},
	{ _id: false }
);

const buttonComponentSchema = new Schema(
	{
		label: { type: String, required: true },
		variant: { type: String, required: true },
	},
	{ _id: false }
);

export const formComponentSchema = new Schema(
	{
		fields: { type: [formFieldComponentSchema], required: true },
		actions: { type: [buttonComponentSchema], default: [] },
	},
	{ _id: false }
);
