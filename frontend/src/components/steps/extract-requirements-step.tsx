import { Code } from "lucide-react";
import { type FC } from "react";
import StepCard from "../step-card";
import { Button } from "../ui/button";

interface ExtractRequirementsStepProps {
	onGoBack: () => void;
	onSubmit: () => void;
}

const ExtractRequirementsStep: FC<ExtractRequirementsStepProps> = ({
	onGoBack,
	onSubmit,
}) => {
	const handleSubmit = () => {
		console.log("clicked");
		onSubmit();
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
				<Button variant="outline" onClick={onGoBack}>
					Edit Description
				</Button>
				<Button onClick={handleSubmit}>Generate UI</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default ExtractRequirementsStep;
