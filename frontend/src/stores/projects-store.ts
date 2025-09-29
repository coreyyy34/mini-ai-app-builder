import { fetchProjectSummaries } from "@/lib/api";
import type { ProjectSummary } from "@coreyyy34/mini-ai-app-builder-shared";
import { create } from "zustand";

interface ProjectsState {
	projects: ProjectSummary[];
	addProject: (project: ProjectSummary) => void;
	removeProject: (id: string) => void;
	loadProjects: () => void;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
	projects: [],

	addProject: (project: ProjectSummary) =>
		set({ projects: [...get().projects, project] }),
	removeProject: (id) =>
		set({ projects: get().projects.filter((p) => p.id !== id) }),
	loadProjects: async () => {
		try {
			const projects = await fetchProjectSummaries();
			set({ projects });
		} catch (err) {
			console.error("Failed to load projects:", err);
		}
	},
}));
