import type { FormComponent } from "@coreyyy34/mini-ai-app-builder-shared";
import type { FC } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

interface GeneratedFormProps {
	form: FormComponent;
}

const standardInputs = [
	"color",
	"date",
	"email",
	"number",
	"password",
	"tel",
	"text",
	"time",
	"url",
];

export const GeneratedForm: FC<GeneratedFormProps> = ({ form }) => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				{form.fields.map((field, idx) => (
					<div key={idx} className="flex flex-col gap-2">
						<div className="flex gap-1">
							<Label>{field.label}</Label>
							{field.required && (
								<span className="text-destructive">*</span>
							)}
						</div>

						{standardInputs.includes(field.inputType as any) && (
							<Input
								type={field.inputType}
								placeholder={field.placeholder}
							/>
						)}

						{field.inputType === "checkbox" && <Checkbox />}
					</div>
				))}

				<div className="flex justify-center gap-4">
					{form.actions.map((action, idx) => (
						<Button key={idx} variant={action.variant}>
							{action.label}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
