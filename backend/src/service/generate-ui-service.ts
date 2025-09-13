import { AppComponents, AppRequirements } from "../types/app";

export const generateUiFromRequirements = async (
	requirements: AppRequirements
): Promise<AppComponents> => {
	return {
		...requirements,
		components: [
			{
				type: "form",
				fields: [
					{
						type: "formField",
						label: {
							type: "formLabel",
							text: "Name",
						},
						input: {
							type: "formInput",
							inputType: "text",
							placeholder: "Enter name",
							required: true,
						},
					},
					{
						type: "formField",

						label: {
							type: "formLabel",
							text: "Email",
						},
						input: {
							type: "formInput",
							inputType: "email",
							placeholder: "Enter email",
							required: true,
						},
					},
					{
						type: "formField",

						label: {
							type: "formLabel",
							text: "Age",
						},
						input: {
							type: "formInput",
							inputType: "number",
							placeholder: "Enter age",
						},
					},
				],
			},
		],
	};
};
