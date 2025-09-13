import { AppRequirements } from "../types/app";

export const captureRequirementsFromPrompt = async (
	prompt: string
): Promise<AppRequirements> => {
	// mock data for now
	return {
		name: "Course Manager",
		description:
			"A tool to manage courses, enroll students, and view reports",
		entities: ["Student", "Course", "Grade"],
		roles: ["Teacher", "Student", "Admin"],
		features: ["Add courses", "Enrol students", "View reports"],
	};
};
