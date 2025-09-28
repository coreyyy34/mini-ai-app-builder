import { BaseComponent } from "./base-components";

export type InputType =
	| "checkbox"
	| "color"
	| "date"
	| "email"
	| "number"
	| "password"
	| "tel"
	| "text"
	| "time"
	| "url";

export interface FormComponent extends BaseComponent {
	type: "form";
	fields: FormFieldComponent[];
}

export interface FormFieldComponent {
	label: string;
	inputType: InputType;
	placeholder: string;
	required: boolean;
}
