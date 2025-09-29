import type { FC, PropsWithChildren } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import type { LucideIcon } from "lucide-react";

const StepCard: FC<PropsWithChildren> & {
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
} = ({ children }) => <Card>{children}</Card>;

const Header: FC<{
	icon?: LucideIcon;
	title: string;
	description?: string;
}> = ({ icon: Icon, title, description }) => (
	<CardHeader>
		<CardTitle className="flex items-center gap-2">
			{Icon && <Icon className="h-5 w-5 text-primary" />}
			{title}
		</CardTitle>
		{description && <CardDescription>{description}</CardDescription>}
	</CardHeader>
);

const Content: FC<PropsWithChildren> = ({ children }) => (
	<CardContent>{children}</CardContent>
);

const Footer: FC<PropsWithChildren> = ({ children }) => (
	<CardFooter className="flex justify-center gap-4">{children}</CardFooter>
);

StepCard.Header = Header;
StepCard.Content = Content;
StepCard.Footer = Footer;

export default StepCard;
