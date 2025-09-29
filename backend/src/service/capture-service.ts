import {
	Project,
	ProjectSpecifications,
} from "@coreyyy34/mini-ai-app-builder-shared";
import { AiService } from "./ai-service";
import { ProjectsService } from "./projects-service";

const SYSTEM_PROMPT = `
You are an expert software architect tasked with extracting a high-level requirements summary from a user-provided application description.
Based on the user's input, generate a valid JSON object with the following schema:

{
  "name": string, // A short, descriptive name for the application. 
  "description": string, // A brief overview of the application's purpose.
  "entities": string[], // The primary data models (e.g., User, Product, Order). Be concise.
  "roles": string[], // The types of users who will interact with the application (e.g., Admin, Customer).
  "features": string[] // The core functionalities expressed as action-oriented verbs (e.g., "Manage inventory", "Process payments").
}

- The output must be valid JSON.
- Do not format the output as a code block. Return plain text only.
- If the user prompt is vague, make minimal, logical assumptions.
- If the prompt is invalid or too unclear to generate any requirements, return an object containing an "error" key with a relevant message.

Example 1 (Clear Input)
User: I need an app for a restaurant. Customers can browse the menu and place an order. Staff can view orders and update their status.
AI Output:
{
  "name": "Restaurant Order App",
  "description": "An application for customers to browse a menu and place orders, and for staff to manage those orders.",
  "entities": ["Menu", "Order", "Customer", "Staff"],
  "roles": ["Customer", "Staff"],
  "features": ["Browse menu", "Place order", "View orders", "Update order status"]
}

Example 2 (Unclear Input)
User: Hello, I need a new app.
AI Output:
{
  "error": "The prompt is too vague to extract requirements. Please provide more detail about the application's purpose."
}
`;

export const captureRequirementsFromPrompt = async (
	prompt: string
): Promise<Project> => {
	const response = await AiService.generateContent(SYSTEM_PROMPT, prompt);
	const specifications = {
		prompt: prompt,
		...response,
	} as ProjectSpecifications;

	const id = await ProjectsService.saveCapturedRequirements(specifications);
	return { id, specifications };
};
