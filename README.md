# Mini AI App Builder

## How it works

**Example Input**: "I want an app to manage student courses and grades. Teachers add courses, students enrol, and admins manage reports."

### Step 1: AI-Powered Requirements Capture

The user enters a description of their desired app requirements and submits. Then, the portal sends the description to an LLM API, which extracts structured requirements

The AI processes the input and returns a JSON object containing:

-   App Name: A concise name for the app
-   Description: A concise summary for the app
-   Entities: Key data types
-   Roles: User types
-   Features: Core functionalities

Example output:

```json
{
	"name": "Course Manager",
	"description": "A tool to manage courses, enroll students, and view reports",
	"entities": ["Student", "Course", "Grade"],
	"roles": ["Teacher", "Student", "Admin"],
	"features": ["Add courses", "Enrol students", "View reports"]
}
```

### Step 2: User Confirmation

The extracted requirements are displayed to the user. The user reviews and confirms that the requirements are their intent. If required, the user can edit the description and resubmit to refine the captured requirements.

### Step 3: AI-Generated UI Framework

Using the confirmed requirements, the portal sends a request to the LLM API to generate a UI structure in JSON format. For each of the captured entities, the framework for a table or form is generated.

Example output for the student entity:

```json
{
	"name": "Course Manager",
	"description": "A tool to manage courses, enroll students, and view reports",
	"entities": ["Student", "Course", "Grade"],
	"roles": ["Teacher", "Student", "Admin"],
	"features": ["Add courses", "Enrol students", "View reports"],
	"components": [
		{
			"type": "form",
			"fields": [
				{
					"type": "formField",
					"details": {
						"label": {
							"type": "formLabel",
							"text": "Name"
						},
						"input": {
							"type": "formInput",
							"inputType": "text",
							"placeholder": "Enter name",
							"required": true
						}
					}
				},
				{
					"type": "formField",
					"details": {
						"label": {
							"type": "formLabel",
							"text": "Email"
						},
						"input": {
							"type": "formInput",
							"inputType": "email",
							"placeholder": "Enter email",
							"required": true
						}
					}
				},
				{
					"type": "formField",
					"details": {
						"label": {
							"type": "formLabel",
							"text": "Age"
						},
						"input": {
							"type": "formInput",
							"inputType": "number",
							"placeholder": "Enter age"
						}
					}
				}
			]
		}
	]
}
```

### Step 4: Rendering the UI

The React frontend fetches the UI JSON from the backend. A recursive renderer processes the generated components and renders them dynamically resulting in a UI containing:

-   A navigation with tabs for each role
-   A form or table for each of the entities

The UI is rendered as a static mock - it is just a visual representation of the apps structure.
