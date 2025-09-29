import { Schema } from "mongoose";

const tableColumnComponentSchema = new Schema(
	{
		header: { type: String, required: true },
		accessor: { type: String, required: true },
		align: {
			type: String,
			enum: ["left", "center", "right"],
			default: "left",
		},
	},
	{ _id: false }
);

const tableRowComponentSchema = new Schema(
	{
		cells: { type: Map, of: String, required: true },
	},
	{ _id: false }
);

export const tableComponentSchema = new Schema(
	{
		columns: { type: [tableColumnComponentSchema], required: true },
		rows: { type: [tableRowComponentSchema], default: [] },
	},
	{ _id: false }
);
