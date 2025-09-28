export type ButtonVariant = "default" | "destructive" | "outline" | "secondary";

export interface ButtonComponent {
	label: string;
	variant: ButtonVariant;
}
