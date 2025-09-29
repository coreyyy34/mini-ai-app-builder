import { FormComponent, TableComponent } from "./component";

export type ProjectId = string;

export interface ProjectSummary {
	id: ProjectId;
	name: string;
	description: string;
}

export interface ProjectSpecifications extends ProjectSummary {
	prompt: string;
	entities: string[];
	roles: string[];
	features: string[];
	message: string;
}

export interface Project {
	id: string;
	specifications: ProjectSpecifications;
	components?: (FormComponent | TableComponent)[];
}
