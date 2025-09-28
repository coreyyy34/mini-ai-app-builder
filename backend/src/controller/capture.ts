import { Request, Response } from "express";
import { captureRequirementsFromPrompt } from "../service/capture-service";

export const captureRequirementsHandler = async (
	req: Request,
	res: Response
) => {
	const prompt = req.body.prompt;

	try {
		const requirements = await captureRequirementsFromPrompt(prompt);
		// const requirements: AppRequirements = {
		// 	name: "Event Management System",
		// 	description:
		// 		"An application allowing event organizers to create and manage events, attendees to register for events, and administrators to oversee all system operations.",
		// 	entities: ["Event", "Organizer", "Attendee", "Registration"],
		// 	roles: ["Event Organizer", "Attendee", "Admin"],
		// 	features: [
		// 		"Create event",
		// 		"Manage events",
		// 		"Register for event",
		// 		"Oversee users",
		// 		"Oversee events",
		// 	],
		// };

		res.status(200).json({ requirements });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
