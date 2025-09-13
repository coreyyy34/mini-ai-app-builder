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

const App = () => {
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
							requirements and mock UI
						</p>
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
			</main>
		</div>
	);
};

export default App;
