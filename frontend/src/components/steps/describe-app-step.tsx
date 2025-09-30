import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import StepCard from "../step-card";
import { AppBuilderStep, useAppBuilderStore } from "@/stores/app-builder-store";
import { fetchRequirements } from "@/lib/api";
import { useProjectsStore } from "@/stores/projects-store";
import { useEffect, useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "../ui/alert-dialog";
import { PromptDisplay } from "../prompt-display";

const DescribeAppStep = () => {
	const description = useAppBuilderStore((state) => state.description);
	const loading = useAppBuilderStore((state) => state.loading);
	const setDescription = useAppBuilderStore((state) => state.setDescription);
	const setProject = useAppBuilderStore((state) => state.setProject);
	const setStep = useAppBuilderStore((state) => state.setStep);
	const setLoading = useAppBuilderStore((state) => state.setLoading);
	const reset = useAppBuilderStore((state) => state.reset);
	const addProject = useProjectsStore((state) => state.addProject);
	const setProjects = useProjectsStore((state) => state.setProjects);
	const project = useAppBuilderStore((state) => state.project);
	const projects = useProjectsStore((state) => state.projects);
	const [error, setError] = useState("");
	const [descriptionEmpty, setDescriptionEmpty] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);

		try {
			const newProject = await fetchRequirements(
				description,
				project?.id
			);
			const existingProject = projects.find(
				(p) => p.id === newProject.id
			);
			if (existingProject) {
				// update existing project
				const updatedProjects = projects.map((p) =>
					p.id === newProject.id
						? { ...p, ...newProject.specifications }
						: p
				);
				setProjects(updatedProjects);
			} else {
				// add new project
				addProject({ ...newProject.specifications, id: newProject.id });
			}

			setProject(newProject);
			setStep(AppBuilderStep.ExtractRequirements);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("I was unable to capture your specification");
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setDescriptionEmpty(description.trim().length == 0);
	}, [description]);

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
					aria-invalid={descriptionEmpty}
				/>
			</StepCard.Content>
			<StepCard.Footer>
				<Button variant="outline" onClick={reset} disabled={loading}>
					Clear
				</Button>
				<Button
					onClick={handleSubmit}
					loading={loading}
					disabled={descriptionEmpty}
				>
					Extract Requirements
				</Button>
			</StepCard.Footer>

			<AlertDialog
				open={!!error}
				onOpenChange={(open) => !open && setError("")}
			>
				<AlertDialogContent className="max-w-lg">
					<AlertDialogHeader>
						<AlertDialogTitle>
							Need More Information
						</AlertDialogTitle>
						<AlertDialogDescription asChild>
							<div className="space-y-4 text-foreground">
								<PromptDisplay prompt={description} />

								<p className="text-sm leading-relaxed">
									{error}
								</p>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction onClick={() => setError("")}>
							Got it
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</StepCard>
	);
};

export default DescribeAppStep;
