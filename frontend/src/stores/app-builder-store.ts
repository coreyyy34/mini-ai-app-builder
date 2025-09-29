import type {
	AppComponents,
	AppRequirements,
} from "@coreyyy34/mini-ai-app-builder-shared";
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
	requirements: AppRequirements | null;
	appComponents: AppComponents | null;
	loading: boolean;
	setStep: (step: AppBuilderStep) => void;
	setDescription: (description: string) => void;
	setRequirements: (requirements: AppRequirements | null) => void;
	setGeneratedComponents: (appComponents: AppComponents | null) => void;
	setLoading: (loading: boolean) => void;
	reset: () => void;
}

export const useAppBuilderStore = create<AppBuilderState>()((set) => ({
	currentStep: 0,
	description: "",
	requirements: null,
	appComponents: null,
	loading: false,

	setStep: (currentStep) => set({ currentStep }),
	setDescription: (description: string) => set({ description }),
	setRequirements: (requirements: AppRequirements | null) =>
		set({ requirements }),
	setGeneratedComponents: (appComponents: AppComponents | null) =>
		set({ appComponents }),
	setLoading: (loading: boolean) => set({ loading }),
	reset: () => set({ currentStep: 0, description: "", requirements: null }),
}));
