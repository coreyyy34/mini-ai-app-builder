import { BotMessageSquare, Github } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
	return (
		<nav className="border-b border-border bg-primary">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-2 text-primary-foreground">
						<BotMessageSquare className="h-8 w-8" />
						<h2 className="text-xl font-bold">AppBuilder AI</h2>
					</div>
					<div className="flex items-center space-x-4">
						<Button variant="ghost" size="icon">
							<Github className="text-secondary" />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
