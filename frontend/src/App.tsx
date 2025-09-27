import Navigation from "./components/navigation";
import Sidebar from "./components/sidebar";
import AppBuilder from "./components/app-builder";

const App = () => {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Navigation />
			<div className="flex flex-1">
				<Sidebar />
				<main className="flex-1 bg-background p-6">
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

						<AppBuilder />
					</div>
				</main>
			</div>
		</div>
	);
};

export default App;
