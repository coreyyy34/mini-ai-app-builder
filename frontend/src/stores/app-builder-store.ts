import type { ParsedRequirements } from "@/types/types";
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
	requirements: ParsedRequirements | null;
	setStep: (step: AppBuilderStep) => void;
	setDescription: (description: string) => void;
	setRequirements: (requirements: ParsedRequirements | null) => void;
	reset: () => void;
}

export const useAppBuilderStore = create<AppBuilderState>()((set, get) => ({
	currentStep: 0,
	description: "",
	requirements: null,

	setStep: (currentStep) => set({ currentStep }),
	setDescription: (description: string) => set({ description }),
	setRequirements: (requirements: ParsedRequirements | null) =>
		set({ requirements }),
	reset: () => set({ currentStep: 0, description: "", requirements: null }),
}));
