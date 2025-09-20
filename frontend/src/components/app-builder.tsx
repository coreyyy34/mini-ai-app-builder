import { useState } from "react";
import DescribeAppStep from "./steps/describe-app-step";
import ExtractRequirementsStep from "./steps/extract-requirements-step";
import GenerateUiStep from "./steps/generate-ui-step";
import { Progress } from "./ui/progress";

const AppBuilder = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const steps = [
		{ value: 0, label: "Describe App" },
		{ value: 1, label: "Extract Requirements" },
		{ value: 2, label: "Generate UI" },
	];
	const totalSteps = steps.length;
	const stepProgress = ((currentStep - 1) / (totalSteps - 1)) * 100;

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

			{currentStep === 1 && (
				<DescribeAppStep
					onSubmit={() => setCurrentStep((prev) => prev + 1)}
				/>
			)}
			{currentStep === 2 && (
				<ExtractRequirementsStep
					onSubmit={() => setCurrentStep((prev) => prev + 1)}
					onGoBack={() => setCurrentStep((prev) => prev - 1)}
				/>
			)}
			{currentStep === 3 && <GenerateUiStep />}
		</div>
	);
};

export default AppBuilder;
