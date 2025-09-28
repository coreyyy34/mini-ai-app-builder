import {
	AppComponents,
	AppRequirements,
} from "@coreyyy34/mini-ai-app-builder-shared";
import { AiService } from "./ai-service";

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

**Component Structures**
1. Form Component Structure - This component represents a data entry form for an entity.
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
2. Do not use a code block (e.g., json ... ) to enclose the output. Return the plain JSON text only.
`;

// const SYSTEM_PROMPT = `
// You are an expert UI architect. Your task is to generate a mock UI structure in JSON format based on a set of application requirements.
// The UI should consist of a series of tabs, with each tab containing either a form or a table.

// Your input will be a JSON object containing the application's entities and features.
// For each entity, you must create either a FormComponent or a TableComponent.
// Based on the user's input, generate a valid JSON object with the following schema:

// {
//   "components": {
//     "<entity_name>": {
//       "type": "form" | "table",
//       "fields"?: [
//         {
//           "label": string,
//           "name": string,
//           "type": "text" | "number" | "date" | "select" | "checkbox" | "textarea"
//         }
//       ],
//       "columns"?: [
//         {
//           "header": string,
//           "accessor": string
//         }
//       ],
//       "rows"?: [
//         // Array of mock data objects
//       ]
//     }
//   }
// }

// - The output must be valid JSON.
// - Do not format the output as a code block. Return plain text only.

// Example
// User:
// {
//   "name": "Restaurant Order App",
//   "description": "An application for customers to browse a menu and place orders, and for staff to manage those orders.",
//   "entities": ["Menu", "Order", "Customer", "Staff"],
//   "roles": ["Customer", "Staff"],
//   "features": ["Browse menu", "Place order", "View orders", "Update order status"]
// }
// AI Output:
// {
//   "components": {
//     "Menu": {
//       "type": "table",
//       "columns": [
//         { "header": "Item", "accessor": "item" },
//         { "header": "Price", "accessor": "price" }
//       ],
//       "rows": [
//         { "item": "Pizza", "price": 15.99 },
//         { "item": "Burger", "price": 12.50 }
//       ]
//     },
//     "Order": {
//       "type": "table",
//       "columns": [
//         { "header": "Order ID", "accessor": "orderId" },
//         { "header": "Status", "accessor": "status" },
//         { "header": "Total", "accessor": "total" }
//       ],
//       "rows": [
//         { "orderId": 123, "status": "Pending", "total": 28.49 },
//         { "orderId": 124, "status": "Ready", "total": 12.50 }
//       ]
//     },
//     "Customer": {
//       "type": "form",
//       "fields": [
//         { "label": "Name", "name": "name", "type": "text" },
//         { "label": "Email", "name": "email", "type": "text" },
//         { "label": "Phone", "name": "phone", "type": "text" }
//       ]
//     },
//     "Staff": {
//       "type": "form",
//       "fields": [
//         { "label": "Employee ID", "name": "employeeId", "type": "text" },
//         { "label": "Name", "name": "name", "type": "text" },
//         { "label": "Role", "name": "role", "type": "text" }
//       ]
//     }
//   }
// }
// `;

export const generateUiFromRequirements = async (
	requirements: AppRequirements
): Promise<AppComponents> => {
	const response = await AiService.generateContent(
		SYSTEM_PROMPT,
		JSON.stringify(requirements)
	);
	const components = response as AppComponents;

	return {
		...requirements,
		...components,
	};
};
