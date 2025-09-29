import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import StepCard from "../step-card";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";
import { fetchRequirements } from "@/lib/api";
import { useProjectsStore } from "@/stores/projects-store";

const DescribeAppStep = () => {
	const description = useAppBuilderStore((state) => state.description);
	const loading = useAppBuilderStore((state) => state.loading);
	const setDescription = useAppBuilderStore((state) => state.setDescription);
	const setProject = useAppBuilderStore((state) => state.setProject);
	const setStep = useAppBuilderStore((state) => state.setStep);
	const setLoading = useAppBuilderStore((state) => state.setLoading);
	const reset = useAppBuilderStore((state) => state.reset);
	const addProject = useProjectsStore((state) => state.addProject);

	const handleSubmit = async () => {
		setLoading(true);

		try {
			const project = await fetchRequirements(description);
			addProject(project.specifications);
			setProject(project);
			setStep(AppBuilderStep.ExtractRequirements);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<StepCard>
			<StepCard.Header
				icon={Sparkles}
				title="Step 1: Describe Your App"
				description="What kind of app are you wanting to build?"
			/>
			<StepCard.Content>
				<Textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="I want an app to manage student courses and grades..."
					disabled={loading}
				/>
			</StepCard.Content>
			<StepCard.Footer>
				<Button variant="outline" onClick={reset} disabled={loading}>
					Clear
				</Button>
				<Button onClick={handleSubmit} loading={loading}>
					Extract Requirements
				</Button>
			</StepCard.Footer>
		</StepCard>
	);
};

export default DescribeAppStep;
