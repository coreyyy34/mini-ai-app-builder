import { Request, Response } from "express";
import { generateUiFromRequirements } from "../service/generate-ui-service";
import { AppRequirements } from "@coreyyy34/mini-ai-app-builder-shared";

export const generateUiHandler = async (req: Request, res: Response) => {
	const requirements = req.body.requirements as AppRequirements;

	try {
		const appComponents = await generateUiFromRequirements(requirements);
		// const appComponents: AppComponents = {
		// 	...requirements,
		// 	components: [
		// 		{
		// 			type: "form",
		// 			title: "Create New Event",
		// 			fields: [
		// 				{
		// 					label: "Event Name",
		// 					inputType: "text",
		// 					placeholder: "Enter event name",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Description",
		// 					inputType: "text",
		// 					placeholder: "Enter event description",
		// 					required: false,
		// 				},
		// 				{
		// 					label: "Date",
		// 					inputType: "date",
		// 					placeholder: "Select event date",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Time",
		// 					inputType: "time",
		// 					placeholder: "Select event time",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Location",
		// 					inputType: "text",
		// 					placeholder: "Enter event location",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Capacity",
		// 					inputType: "number",
		// 					placeholder: "Enter maximum attendees",
		// 					required: false,
		// 				},
		// 			],
		// 			actions: [
		// 				{
		// 					label: "Create Event",
		// 					variant: "default",
		// 				},
		// 				{
		// 					label: "Cancel",
		// 					variant: "destructive",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "table",
		// 			title: "Events",
		// 			columns: [
		// 				{
		// 					header: "Event Name",
		// 					accessor: "eventName",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Date",
		// 					accessor: "eventDate",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Time",
		// 					accessor: "eventTime",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Location",
		// 					accessor: "eventLocation",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Capacity",
		// 					accessor: "eventCapacity",
		// 					align: "center",
		// 				},
		// 			],
		// 			rows: [
		// 				{
		// 					cells: {
		// 						eventName: "Annual Tech Conference",
		// 						eventDate: "2024-10-20",
		// 						eventTime: "09:00",
		// 						eventLocation: "Convention Center",
		// 						eventCapacity: "500",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						eventName: "Summer Music Festival",
		// 						eventDate: "2024-07-15",
		// 						eventTime: "14:00",
		// 						eventLocation: "City Park Amphitheater",
		// 						eventCapacity: "5000",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						eventName: "Startup Pitch Night",
		// 						eventDate: "2024-09-10",
		// 						eventTime: "18:30",
		// 						eventLocation: "Innovation Hub",
		// 						eventCapacity: "150",
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "form",
		// 			title: "New Organizer",
		// 			fields: [
		// 				{
		// 					label: "Organizer Name",
		// 					inputType: "text",
		// 					placeholder: "Enter organizer's full name",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Email",
		// 					inputType: "email",
		// 					placeholder: "Enter organizer's email",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Phone",
		// 					inputType: "tel",
		// 					placeholder: "Enter organizer's phone number",
		// 					required: false,
		// 				},
		// 			],
		// 			actions: [
		// 				{
		// 					label: "Add Organizer",
		// 					variant: "default",
		// 				},
		// 				{
		// 					label: "Clear",
		// 					variant: "outline",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "table",
		// 			title: "Organizers",
		// 			columns: [
		// 				{
		// 					header: "Organizer Name",
		// 					accessor: "organizerName",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Email",
		// 					accessor: "organizerEmail",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Phone",
		// 					accessor: "organizerPhone",
		// 					align: "left",
		// 				},
		// 			],
		// 			rows: [
		// 				{
		// 					cells: {
		// 						organizerName: "Tech Events Co.",
		// 						organizerEmail: "contact@techevents.com",
		// 						organizerPhone: "555-123-4567",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						organizerName: "Festival Planners Inc.",
		// 						organizerEmail: "info@festivals.com",
		// 						organizerPhone: "555-987-6543",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						organizerName: "Startup Network",
		// 						organizerEmail: "support@startupnetwork.org",
		// 						organizerPhone: "555-555-1212",
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "form",
		// 			title: "Register Attendee",
		// 			fields: [
		// 				{
		// 					label: "Full Name",
		// 					inputType: "text",
		// 					placeholder: "Enter your full name",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Email",
		// 					inputType: "email",
		// 					placeholder: "Enter your email address",
		// 					required: true,
		// 				},
		// 				{
		// 					label: "Phone Number",
		// 					inputType: "tel",
		// 					placeholder: "Enter your phone number",
		// 					required: false,
		// 				},
		// 				{
		// 					label: "Event",
		// 					inputType: "text",
		// 					placeholder: "Select event to register for",
		// 					required: true,
		// 				},
		// 			],
		// 			actions: [
		// 				{
		// 					label: "Register",
		// 					variant: "default",
		// 				},
		// 				{
		// 					label: "Cancel",
		// 					variant: "destructive",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "table",
		// 			title: "Attendees",
		// 			columns: [
		// 				{
		// 					header: "Full Name",
		// 					accessor: "attendeeName",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Email",
		// 					accessor: "attendeeEmail",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Phone",
		// 					accessor: "attendeePhone",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Event Registered For",
		// 					accessor: "registeredEvent",
		// 					align: "left",
		// 				},
		// 			],
		// 			rows: [
		// 				{
		// 					cells: {
		// 						attendeeName: "Alice Smith",
		// 						attendeeEmail: "alice.smith@email.com",
		// 						attendeePhone: "555-111-2222",
		// 						registeredEvent: "Annual Tech Conference",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						attendeeName: "Bob Johnson",
		// 						attendeeEmail: "bob.j@email.com",
		// 						attendeePhone: "555-333-4444",
		// 						registeredEvent: "Summer Music Festival",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						attendeeName: "Charlie Brown",
		// 						attendeeEmail: "charlie.b@email.com",
		// 						attendeePhone: "555-555-6666",
		// 						registeredEvent: "Startup Pitch Night",
		// 					},
		// 				},
		// 			],
		// 		},
		// 		{
		// 			type: "table",
		// 			title: "Registrations",
		// 			columns: [
		// 				{
		// 					header: "Registration ID",
		// 					accessor: "registrationId",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Attendee Name",
		// 					accessor: "attendeeName",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Event Name",
		// 					accessor: "eventName",
		// 					align: "left",
		// 				},
		// 				{
		// 					header: "Registration Date",
		// 					accessor: "registrationDate",
		// 					align: "left",
		// 				},
		// 			],
		// 			rows: [
		// 				{
		// 					cells: {
		// 						registrationId: "REG001",
		// 						attendeeName: "Alice Smith",
		// 						eventName: "Annual Tech Conference",
		// 						registrationDate: "2024-09-15",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						registrationId: "REG002",
		// 						attendeeName: "Bob Johnson",
		// 						eventName: "Summer Music Festival",
		// 						registrationDate: "2024-07-10",
		// 					},
		// 				},
		// 				{
		// 					cells: {
		// 						registrationId: "REG003",
		// 						attendeeName: "Charlie Brown",
		// 						eventName: "Startup Pitch Night",
		// 						registrationDate: "2024-09-01",
		// 					},
		// 				},
		// 			],
		// 		},
		// 	],
		// };
		res.status(200).json(appComponents);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
