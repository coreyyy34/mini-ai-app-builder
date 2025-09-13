import { History } from "lucide-react";

const Sidebar = () => {
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

			<div className="text-center text-muted-foreground text-sm py-8">
				<History className="h-8 w-8 mx-auto mb-2 opacity-50" />
				No projects yet
			</div>
		</div>
	);
};

export default Sidebar;
