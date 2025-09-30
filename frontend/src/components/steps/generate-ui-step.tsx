import { Code } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";
import { GeneratedApp } from "../generator/generated-app";
import { PromptDisplay } from "../prompt-display";

const GenerateUiStep = () => {
	const project = useAppBuilderStore((state) => state.project);
	const reset = useAppBuilderStore((state) => state.reset);
	const setStep = useAppBuilderStore((state) => state.setStep);
	const setDescription = useAppBuilderStore((state) => state.setDescription);

	const handleEdit = () => {
		setDescription(project?.specifications.description || "");
		setStep(AppBuilderStep.DescribeApp);
	};

	return (
		<StepCard>
			<div className="flex justify-between">
				<div className="flex-1">
					<StepCard.Header
						title="Step 3: Generate UI"
						icon={Code}
						description="Preview of your app's interface based on the requirements"
					/>
				</div>
				<div className="flex gap-4 px-6">
					<Button variant="outline" onClick={handleEdit}>
						Edit
					</Button>
					<Button variant="destructive" onClick={reset}>
						Start Over
					</Button>
				</div>
			</div>
			<StepCard.Content>
				<div className="pb-6">
					<PromptDisplay
						prompt={project?.specifications.prompt || ""}
					/>
				</div>

				{project?.components && (
					<GeneratedApp project={project}></GeneratedApp>
				)}
			</StepCard.Content>
			<StepCard.Footer>
				<Button type="button" variant="outline" onClick={reset}>
					Start Over
				</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default GenerateUiStep;
