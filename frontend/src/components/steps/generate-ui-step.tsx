import { Code } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";

const GenerateUiStep = () => {
	return (
		<StepCard>
			<StepCard.Header
				title="Step 3: Generate UI"
				icon={Code}
				description="Preview of your app's interface based on the requirements"
			/>
			<StepCard.Content></StepCard.Content>
			<StepCard.Footer>
				<Button type="button" variant="outline">
					Start Over
				</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default GenerateUiStep;
