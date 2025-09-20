import type { ParsedRequirements } from "@/types/types";

export const fetchRequirements = async (
	description: string
): Promise<ParsedRequirements> => {
	await new Promise((resolve) => setTimeout(resolve, 1500));
	return {
		appName: "Mock App",
		entities: ["Course", "Student"],
		roles: ["Admin", "Teacher"],
		features: ["Manage grades", "View courses"],
	};
};
