import type { Project } from "@coreyyy34/mini-ai-app-builder-shared";
import { create } from "zustand";

export const AppBuilderStep = {
	DescribeApp: 0,
	ExtractRequirements: 1,
	GenerateUI: 2,
} as const;

export type AppBuilderStep =
	(typeof AppBuilderStep)[keyof typeof AppBuilderStep];

interface AppBuilderState {
	currentStep: number;
	description: string;
	project: Project | null;
	loading: boolean;
	setStep: (step: AppBuilderStep) => void;
	setDescription: (description: string) => void;
	setProject: (project: Project | null) => void;
	setLoading: (loading: boolean) => void;
	reset: () => void;
}

export const useAppBuilderStore = create<AppBuilderState>()((set) => ({
	currentStep: 0,
	description: "",
	project: null,
	loading: false,

	setStep: (currentStep) => set({ currentStep }),
	setDescription: (description: string) => set({ description }),
	setProject: (project: Project | null) => set({ project }),
	setLoading: (loading: boolean) => set({ loading }),
	reset: () => set({ currentStep: 0, description: "", project: null }),
}));
