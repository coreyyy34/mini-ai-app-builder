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

export interface FormFieldComponent extends BaseComponent {
	type: "formField";
	label: FormLabelComponent;
	input: FormInputComponent;
}

export interface FormLabelComponent extends BaseComponent {
	type: "formLabel";
	text: string;
}

export interface FormInputComponent extends BaseComponent {
	type: "formInput";
	inputType: InputType;
	placeholder?: string;
	required?: boolean;
}
