import { Project, ProjectId } from "./app";

export interface CaptureSpecificationsRequest {
	id?: ProjectId; // in case we are editing a project
	prompt: string;
}

export interface CaptureSpecificationsResponse {
	project: Project;
}

export interface GenerateUIRequest {
	id: ProjectId;
}

export interface GenerateUIResponse {
	project: Project;
}
