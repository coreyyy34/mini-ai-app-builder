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
	details: {
		fields: FormFieldComponent[];
	};
}

export interface FormFieldComponent extends BaseComponent {
	type: "formField";
	details: {
		label: FormLabelComponent;
		input: FormInputComponent;
	};
}

export interface FormLabelComponent extends BaseComponent {
	type: "formLabel";
	details: {
		text: string;
	};
}

export interface FormInputComponent extends BaseComponent {
	type: "formInput";
	details: {
		inputType: InputType;
		placeholder?: string;
		required?: boolean;
	};
}
