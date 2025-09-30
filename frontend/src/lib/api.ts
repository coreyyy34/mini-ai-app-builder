import type {
	Project,
	ProjectId,
	ProjectSummary,
} from "@coreyyy34/mini-ai-app-builder-shared";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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
		const body = await response.json().catch(() => ({
			error: `Error: ${response.status}`,
		}));
		throw new Error(body.error || "Request failed");
	}

	return await response.json();
};

export const fetchRequirements = async (prompt: string): Promise<Project> => {
	const response = await apiFetch("/capture", {
		method: "POST",
		body: JSON.stringify({ prompt }),
	});
	const { project } = response;
	return project;
};

export const fetchGeneratedUi = async (id: ProjectId): Promise<Project> => {
	const response = await apiFetch("/generate", {
		method: "POST",
		body: JSON.stringify({ id }),
	});
	const { project } = response;
	return project;
};

export const fetchProjectSummaries = async (): Promise<ProjectSummary[]> => {
	const response = await apiFetch("/projects");
	return response as ProjectSummary[];
};

export const fetchProject = async (id: ProjectId): Promise<Project> => {
	const response = await apiFetch(`/projects/${id}`);
	return response as Project;
};
