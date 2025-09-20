import { Code } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";
import { useAppBuilderStore } from "@/stores/app-builder-store";

const GenerateUiStep = () => {
	const reset = useAppBuilderStore((state) => state.reset);

	return (
		<StepCard>
			<StepCard.Header
				title="Step 3: Generate UI"
				icon={Code}
				description="Preview of your app's interface based on the requirements"
			/>
			<StepCard.Content></StepCard.Content>
			<StepCard.Footer>
				<Button type="button" variant="outline" onClick={reset}>
					Start Over
				</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default GenerateUiStep;
