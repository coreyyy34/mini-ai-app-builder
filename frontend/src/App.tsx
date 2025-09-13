import { Sparkles } from "lucide-react";
import Navigation from "./components/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";

const App = () => {
	const steps = [
		{ value: 0, label: "Describe App" },
		{ value: 1, label: "Extract Requirements" },
		{ value: 2, label: "Generate UI" },
	];
	const currentStep = 0;
	const totalSteps = steps.length;
	const stepProgress = (currentStep / (totalSteps - 1)) * 100;

	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main className="container mx-auto px-4 py-8">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
							AI-Powered App Builder
						</h1>
						<p className="text-xl text-muted-foreground text-pretty">
							Describe your app idea and watch as AI generates
							requirements and UI
						</p>
					</div>

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

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Sparkles className="h-5 w-5 text-primary" />
									Step 1: Describe Your App
								</CardTitle>
								<CardDescription>
									What kind of app are you wanting to build?
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Textarea placeholder="I want an app to manage student courses and grades. Teachers add courses, students enrol, and admins manage reports"></Textarea>
							</CardContent>
							<CardFooter className="flex justify-center gap-4">
								<Button variant="outline">Clear</Button>
								<Button>Extract Requirements</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
