import { Code, Settings, Users } from "lucide-react";
import StepCard from "../step-card";
import { Button } from "../ui/button";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";
import { Badge } from "../ui/badge";
import { fetchGeneratedUi } from "@/lib/api";

const ExtractRequirementsStep = () => {
	const loading = useAppBuilderStore((state) => state.loading);
	const setStep = useAppBuilderStore((state) => state.setStep);
	const setLoading = useAppBuilderStore((state) => state.setLoading);
	const requirements = useAppBuilderStore((state) => state.requirements);
	const setGeneratedComponents = useAppBuilderStore(
		(state) => state.setGeneratedComponents
	);

	if (!requirements) return null;

	const handleBack = () => {
		setStep(AppBuilderStep.DescribeApp);
	};

	const handleSubmit = async () => {
		setLoading(true);

		try {
			const generatedUi = await fetchGeneratedUi(requirements);
			setGeneratedComponents(generatedUi);
			setStep(AppBuilderStep.GenerateUI);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<StepCard>
			<StepCard.Header
				title="Step 2: Extract Requirements"
				icon={Code}
				description="Here's what we understood from your description"
			/>
			<StepCard.Content>
				{requirements && (
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold mb-2">App Name</h3>
							<Badge className="text-lg px-3 py-1">
								{requirements.name}
							</Badge>
						</div>

						<div>
							<h3 className="font-semibold mb-2">Entities</h3>
							<div className="flex flex-wrap gap-2">
								{requirements.entities.map((entity, index) => (
									<Badge key={index} variant="outline">
										{entity}
									</Badge>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-semibold mb-2">User Roles</h3>
							<div className="flex flex-wrap gap-2">
								{requirements.roles.map((role, index) => (
									<Badge
										key={index}
										variant="outline"
										className="bg-primary/10"
									>
										<Users className="mr-1 h-3 w-3" />
										{role}
									</Badge>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-semibold mb-2">Features</h3>
							<div className="flex flex-wrap gap-2">
								{requirements.features.map((feature, index) => (
									<Badge
										key={index}
										variant="outline"
										className="bg-accent/10"
									>
										<Settings className="mr-1 h-3 w-3" />
										{feature}
									</Badge>
								))}
							</div>
						</div>
					</div>
				)}
			</StepCard.Content>
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
