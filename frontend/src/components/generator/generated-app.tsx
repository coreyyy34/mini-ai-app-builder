import type { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GeneratedTable } from "./generated-table";
import { GeneratedForm } from "./generated-form";
import type { Project } from "@coreyyy34/mini-ai-app-builder-shared";

interface GeneratedAppProps {
	project: Project;
}

export const GeneratedApp: FC<GeneratedAppProps> = ({ project }) => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<Tabs>
					<TabsList>
						{project.specifications.roles.map((role, idx) => (
							<TabsTrigger key={idx} value={role}>
								{role}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			</div>

			{project.components?.map((component, idx) => (
				<Card key={idx}>
					<CardHeader>
						<CardTitle>{component.title}</CardTitle>
					</CardHeader>
					<CardContent>
						{component.type == "table" && (
							<GeneratedTable table={component} />
						)}
						{component.type == "form" && (
							<GeneratedForm form={component} />
						)}
					</CardContent>
				</Card>
			))}
		</div>
	);
};
