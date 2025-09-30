import type { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GeneratedTable } from "./generated-table";
import { GeneratedForm } from "./generated-form";
import type {
	FormComponent,
	Project,
	TableComponent,
} from "@coreyyy34/mini-ai-app-builder-shared";

interface GeneratedAppProps {
	project: Project;
}

export const GeneratedApp: FC<GeneratedAppProps> = ({ project }) => {
	const componentsByRole =
		project.components?.reduce<
			Record<string, (TableComponent | FormComponent)[]>
		>((acc, component) => {
			const roleAccess = component.roles;

			for (const role of project.specifications.roles) {
				if (roleAccess.includes(role)) {
					if (!acc[role]) {
						acc[role] = [];
					}
					acc[role].push(component as TableComponent | FormComponent);
				}
			}
			return acc;
		}, {}) ?? {};

	const allComponents = project.components ?? [];

	const renderComponents = (
		components: (TableComponent | FormComponent)[]
	) => (
		<div className="flex flex-col gap-4">
			{components.map((component, idx) => (
				<Card key={idx}>
					<CardHeader>
						<CardTitle>{component.title}</CardTitle>
					</CardHeader>
					<CardContent>
						{component.type === "table" && (
							<GeneratedTable table={component} />
						)}
						{component.type === "form" && (
							<GeneratedForm form={component} />
						)}
					</CardContent>
				</Card>
			))}
		</div>
	);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-6">
				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						{project.specifications.roles.map((role, idx) => (
							<TabsTrigger key={idx} value={role}>
								{role}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="all">
						{renderComponents(allComponents)}
					</TabsContent>
					{project.specifications.roles.map((role) => (
						<TabsContent key={role} value={role}>
							{renderComponents(componentsByRole[role] ?? [])}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</div>
	);
};
