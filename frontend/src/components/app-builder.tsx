import DescribeAppStep from "./steps/describe-app-step";
import ExtractRequirementsStep from "./steps/extract-requirements-step";
import GenerateUiStep from "./steps/generate-ui-step";
import { Progress } from "./ui/progress";
import { useAppBuilderStore } from "@/stores/app-builder-store";

const AppBuilder = () => {
	const currentStep = useAppBuilderStore((state) => state.currentStep);
	const steps = [
		{ value: 0, label: "Describe App" },
		{ value: 1, label: "Extract Requirements" },
		{ value: 2, label: "Generate UI" },
	];
	const totalSteps = steps.length;
	const stepProgress = (currentStep / (totalSteps - 1)) * 100;

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<div className="flex justify-between items-center">
					{steps.map((step) => (
						<div
							className={`text-sm font-medium transition-colors duration-300 ${
								step.value <= currentStep
									? "text-primary"
									: "text-muted-foreground"
							}`}
							key={step.value}
						>
							{step.label}
						</div>
					))}
				</div>
				<Progress value={stepProgress}></Progress>
			</div>

			{currentStep === 0 && <DescribeAppStep />}
			{currentStep === 1 && <ExtractRequirementsStep />}
			{currentStep === 2 && <GenerateUiStep />}
		</div>
	);
};

export default AppBuilder;
