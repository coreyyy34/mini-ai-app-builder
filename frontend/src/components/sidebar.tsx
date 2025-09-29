import { useProjectsStore } from "@/stores/projects-store";
import { History, Star } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useAppBuilderStore } from "@/stores/app-builder-store";
import { cn } from "@/lib/utils";

const Sidebar = () => {
	const { projects, loadProjects } = useProjectsStore();
	const activeProject = useAppBuilderStore((state) => state.project);

	useEffect(() => {
		loadProjects();
	}, []);

	return (
		<div className="w-80 border-r border-border bg-card">
			<div className="p-4 border-b">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold text flex items-center gap-2 text-neutral-600">
						<History className="h-5 w-5" />
						Recent Projects
					</h2>
				</div>
			</div>

			<div className="text-center text-muted-foreground text-sm py-4">
				<div className="flex flex-col gap-4 px-4">
					{projects.length == 0 ? (
						<div>
							<History className="h-8 w-8 mx-auto mb-2 opacity-50" />
							No projects yet{" "}
						</div>
					) : (
						projects.map((project) => (
							<Button
								key={project.id}
								variant={
									activeProject?.id == project.id
										? "default"
										: "outline"
								}
								className="justify-start"
							>
								<Star />
								{project.name}
							</Button>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
