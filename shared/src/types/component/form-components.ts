import { BaseComponent } from "./base-components";
import { ButtonComponent } from "./button-components";

export const inputTypes = [
	"checkbox",
	"color",
	"date",
	"email",
	"number",
	"password",
	"tel",
	"text",
	"time",
	"url",
] as const;

export type InputType = (typeof inputTypes)[number];

export interface FormComponent extends BaseComponent {
	type: "form";
	fields: FormFieldComponent[];
	actions: ButtonComponent[];
}

export interface FormFieldComponent {
	label: string;
	inputType: InputType;
	placeholder: string;
	required: boolean;
}
