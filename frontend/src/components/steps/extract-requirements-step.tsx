import { Code } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";

const ExtractRequirementsStep = () => {
	const loading = useAppBuilderStore((state) => state.loading);
	const setStep = useAppBuilderStore((state) => state.setStep);
	const setLoading = useAppBuilderStore((state) => state.setLoading);

	const handleBack = () => {
		setStep(AppBuilderStep.DescribeApp);
	};

	const handleSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setStep(AppBuilderStep.GenerateUI);
		}, 1500);
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
				<Button
					variant="outline"
					onClick={handleBack}
					disabled={loading}
				>
					Edit Description
				</Button>
				<Button onClick={handleSubmit} loading={loading}>
					Generate UI
				</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default ExtractRequirementsStep;
