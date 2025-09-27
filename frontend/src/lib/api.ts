import type { AppRequirements } from "@coreyyy34/mini-ai-app-builder-shared";

const API_URL = "http://localhost:3000";

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
	const headers = {
		"Content-Type": "application/json",
		...options.headers,
	};

	const response = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers,
	});

	if (!response.ok) {
		const error = await response.json().catch(() => ({
			message: `Error: ${response.status}`,
		}));
		throw new Error(error.message || "Request failed");
	}

	return await response.json();
};

export const fetchRequirements = async (
	description: string
): Promise<AppRequirements> => {
	const response = await apiFetch("/capture", {
		method: "POST",
		body: JSON.stringify({ prompt: description }),
	});
	return response.requirements satisfies AppRequirements;
};
