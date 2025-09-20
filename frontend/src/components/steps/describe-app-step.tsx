import { Sparkles } from "lucide-react";
import { useState, type FC } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import StepCard from "../step-card";

interface DescribeAppStepProps {
	onSubmit: () => void;
}

const DescribeAppStep: FC<DescribeAppStepProps> = ({ onSubmit }) => {
	const [prompt, setPrompt] = useState("");

	const handleSubmit = () => {
		onSubmit();
	};

	const handleClear = () => setPrompt("");

	return (
		<StepCard>
			<StepCard.Header
				icon={Sparkles}
				title="Step 1: Describe Your App"
				description="What kind of app are you wanting to build?"
			/>
			<StepCard.Content>
				<Textarea
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					placeholder="I want an app to manage student courses and grades..."
				/>
			</StepCard.Content>
			<StepCard.Footer>
				<Button variant="outline" onClick={handleClear}>
					Clear
				</Button>
				<Button onClick={handleSubmit}>Extract Requirements</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default DescribeAppStep;
