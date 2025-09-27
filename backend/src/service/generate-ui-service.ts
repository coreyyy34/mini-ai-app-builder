import {
	AppComponents,
	AppRequirements,
} from "@coreyyy34/mini-ai-app-builder-shared";
import { AiService } from "./ai-service";

const SYSTEM_PROMPT = `
You are an expert UI architect. Your task is to generate a mock UI structure in JSON format based on a set of application requirements. 
The UI should consist of a series of tabs, with each tab containing either a form or a table.

Your input will be a JSON object containing the application's entities and features. 
For each entity, you must create either a FormComponent or a TableComponent.
Based on the user's input, generate a valid JSON object with the following schema:

{
  "components": {
    "<entity_name>": {
      "type": "form" | "table",
      "fields"?: [
        {
          "label": string,
          "name": string,
          "type": "text" | "number" | "date" | "select" | "checkbox" | "textarea"
        }
      ],
      "columns"?: [
        {
          "header": string,
          "accessor": string
        }
      ],
      "rows"?: [
        // Array of mock data objects
      ]
    }
  }
}

- The output must be valid JSON.
- Do not format the output as a code block. Return plain text only.

Example
User:
{
  "name": "Restaurant Order App",
  "description": "An application for customers to browse a menu and place orders, and for staff to manage those orders.",
  "entities": ["Menu", "Order", "Customer", "Staff"],
  "roles": ["Customer", "Staff"],
  "features": ["Browse menu", "Place order", "View orders", "Update order status"]
}
AI Output:
{
  "components": {
    "Menu": {
      "type": "table",
      "columns": [
        { "header": "Item", "accessor": "item" },
        { "header": "Price", "accessor": "price" }
      ],
      "rows": [
        { "item": "Pizza", "price": 15.99 },
        { "item": "Burger", "price": 12.50 }
      ]
    },
    "Order": {
      "type": "table",
      "columns": [
        { "header": "Order ID", "accessor": "orderId" },
        { "header": "Status", "accessor": "status" },
        { "header": "Total", "accessor": "total" }
      ],
      "rows": [
        { "orderId": 123, "status": "Pending", "total": 28.49 },
        { "orderId": 124, "status": "Ready", "total": 12.50 }
      ]
    },
    "Customer": {
      "type": "form",
      "fields": [
        { "label": "Name", "name": "name", "type": "text" },
        { "label": "Email", "name": "email", "type": "text" },
        { "label": "Phone", "name": "phone", "type": "text" }
      ]
    },
    "Staff": {
      "type": "form",
      "fields": [
        { "label": "Employee ID", "name": "employeeId", "type": "text" },
        { "label": "Name", "name": "name", "type": "text" },
        { "label": "Role", "name": "role", "type": "text" }
      ]
    }
  }
}
`;

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
