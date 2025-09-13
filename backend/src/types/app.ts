import { BaseComponent, FormComponent, TableComponent } from "./component";

export interface AppRequirements {
	name: string;
	description: string;
	entities: string[];
	roles: string[];
	features: string[];
}

export interface AppComponents extends AppRequirements {
	components: (FormComponent | TableComponent)[];
}
