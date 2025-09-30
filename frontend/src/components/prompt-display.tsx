import { type FC } from "react";

interface PromptDisplayProps {
	prompt: string;
}

export const PromptDisplay: FC<PromptDisplayProps> = ({ prompt }) => {
	return (
		<div className="rounded-lg bg-muted p-3">
			<p className="text-xs font-medium text-muted-foreground mb-1.5">
				Your input:
			</p>
			<p className="text-sm">{prompt}</p>
		</div>
	);
};
