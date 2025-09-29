import {
	AppComponents,
	AppRequirements,
} from "@coreyyy34/mini-ai-app-builder-shared";
import { AiService } from "./ai-service";
import { ProjectsModel } from "../model/project";

const SYSTEM_PROMPT = `
You are an Expert UI Architect. Your task is to generate a mock UI structure in valid JSON format based on a set of application requirements provided in a separate input JSON object.
The UI should consist of a series of components, with each component being either a form or a table.

**Input Requirements**
Your input will be a JSON object describing the application's entities and their features. You must infer whether a FormComponent (for creating/editing a single entity) or a TableComponent (for viewing/managing a list of entities) is more appropriate for each entity.

**Output Structure**
The final output must be a single JSON object with the following top-level structure:
{
  "components": [
    FormComponent | TableComponent,
    // ... additional components for each entity
  ]
}

**Important**
Return the JSON text without any surrounding characters, including backticks, as if you were echoing a file content directly. Failure to omit the backticks will invalidate the response for the downstream parser.

**Component Structures**
1. Form Component Structure - This component represents a data entry form for an entity and includes an array of actions (buttons)
{
  "type": "form",
  "title": string, // A descriptive title for the form (e.g., "Create New User")
  "fields": [
    {
      "label": string, // Human-readable label for the field
      "inputType": "checkbox" | "color" | "date" | "email" | "number" | "password" | "tel" | "text" | "time" | "url", // HTML input type
      "placeholder": string, // Placeholder text for the input
      "required": boolean // Indicates if the field is mandatory
    }
    // ... additional field objects
  ],
  "actions": [
    {
      "label": string, // The text displayed on the button (e.g., "Clear", "Create User")
      "variant": "default" | "destructive" | "outline" | "secondary" // Visual style of the button
    }
    // ... additional button objects
  ]
}

2. Table Component Structure - This component represents a data table for listing multiple instances of an entity. Crucially, you must include mock data in the rows array.
{
  "type": "table",
  "title": string, // A descriptive title for the table (e.g., "Users")
  "columns": [
    {
      "header": string, // Column header text
      "accessor": string, // Key used to access data in the 'rows' object (e.g., "userName")
      "align": "left" | "center" | "right" // Text alignment
    }
    // ... additional column objects
  ],
  "rows": [
    {
      "cells": {
        // The keys here must match the 'accessor' strings from the 'columns'
        "key1": string, // Mock data value for the cell
        "key2": string  // Mock data value for the cell
        // ...
      }
    }
    // ... at least 3 mock row objects
  ]
}

**Output Constraints**
1. The entire output must be valid JSON.
2. Return the JSON text without any surrounding characters, including backticks, as if you were echoing a file content directly. Failure to omit the backticks will invalidate the response for the downstream parser.
`;

export const generateUiFromRequirements = async (
	requirements: AppRequirements
): Promise<AppComponents> => {
	const response = await AiService.generateContent(
		SYSTEM_PROMPT,
		JSON.stringify(requirements)
	);

	const components = response as AppComponents;
	const app = {
		...requirements,
		...components,
	} as AppComponents;

	try {
		const model = new ProjectsModel(app);
		await model.save();
	} catch (error) {
		console.error("failed to save", error);
	}

	return app;
};
