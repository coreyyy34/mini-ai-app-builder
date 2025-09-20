import { Code } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";

const ExtractRequirementsStep = () => {
	const setStep = useAppBuilderStore((state) => state.setStep);

	const handleBack = () => {
		setStep(AppBuilderStep.DescribeApp);
	};

	const handleSubmit = () => {
		setStep(AppBuilderStep.GenerateUI);
	};

	return (
		<StepCard>
			<StepCard.Header
				title="Step 2: Extract Requirements"
				icon={Code}
				description="Here's what we understood from your description"
			/>
			<StepCard.Content></StepCard.Content>
			<StepCard.Footer>
				<Button variant="outline" onClick={handleBack}>
					Edit Description
				</Button>
				<Button onClick={handleSubmit}>Generate UI</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default ExtractRequirementsStep;
