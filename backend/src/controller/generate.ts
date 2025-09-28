import { Request, Response } from "express";
import { generateUiFromRequirements } from "../service/generate-ui-service";
import {
	AppComponents,
	AppRequirements,
} from "@coreyyy34/mini-ai-app-builder-shared";

export const generateUiHandler = async (req: Request, res: Response) => {
	const requirements = req.body.requirements as AppRequirements;

	try {
		// const appComponents = await generateUiFromRequirements(requirements);
		const appComponents: AppComponents = {
			...requirements,
			components: [
				{
					type: "form",
					title: "Create New Event",
					fields: [
						{
							label: "Event Name",
							inputType: "text",
							placeholder: "Enter event name",
							required: true,
						},
						{
							label: "Description",
							inputType: "text",
							placeholder: "Describe the event",
							required: false,
						},
						{
							label: "Start Date",
							inputType: "date",
							placeholder: "Select start date",
							required: true,
						},
						{
							label: "End Date",
							inputType: "date",
							placeholder: "Select end date",
							required: false,
						},
						{
							label: "Location",
							inputType: "text",
							placeholder: "Enter event location",
							required: true,
						},
						{
							label: "Capacity",
							inputType: "number",
							placeholder: "Enter maximum attendees",
							required: true,
						},
					],
				},
				{
					type: "table",
					title: "Upcoming Events",
					columns: [
						{
							header: "Event Name",
							accessor: "eventName",
							align: "left",
						},
						{
							header: "Start Date",
							accessor: "startDate",
							align: "center",
						},
						{
							header: "Location",
							accessor: "location",
							align: "left",
						},
						{
							header: "Status",
							accessor: "status",
							align: "center",
						},
					],
					rows: [
						{
							cells: {
								eventName: "Tech Conference 2024",
								startDate: "2024-10-15",
								location: "Metropolitan Convention Center",
								status: "Scheduled",
							},
						},
						{
							cells: {
								eventName: "Annual Music Festival",
								startDate: "2024-08-20",
								location: "City Park Amphitheater",
								status: "Scheduled",
							},
						},
						{
							cells: {
								eventName: "Art Exhibition Opening",
								startDate: "2024-09-01",
								location: "Downtown Gallery",
								status: "Scheduled",
							},
						},
					],
				},
				{
					type: "form",
					title: "Create New Organizer",
					fields: [
						{
							label: "Organizer Name",
							inputType: "text",
							placeholder: "Enter organizer's full name",
							required: true,
						},
						{
							label: "Email",
							inputType: "email",
							placeholder: "Enter organizer's email address",
							required: true,
						},
						{
							label: "Phone",
							inputType: "tel",
							placeholder: "Enter organizer's phone number",
							required: false,
						},
						{
							label: "Company",
							inputType: "text",
							placeholder: "Enter organizer's company (optional)",
							required: false,
						},
					],
				},
				{
					type: "table",
					title: "Event Organizers",
					columns: [
						{
							header: "Name",
							accessor: "organizerName",
							align: "left",
						},
						{
							header: "Email",
							accessor: "email",
							align: "left",
						},
						{
							header: "Company",
							accessor: "company",
							align: "left",
						},
					],
					rows: [
						{
							cells: {
								organizerName: "Global Events Inc.",
								email: "info@globalevents.com",
								company: "Global Events Inc.",
							},
						},
						{
							cells: {
								organizerName: "Artistic Productions",
								email: "contact@artisticprod.net",
								company: "Artistic Productions LLC",
							},
						},
						{
							cells: {
								organizerName: "Music Makers",
								email: "support@musicmakers.org",
								company: "Music Makers Collective",
							},
						},
					],
				},
				{
					type: "form",
					title: "Register New Attendee",
					fields: [
						{
							label: "First Name",
							inputType: "text",
							placeholder: "Enter your first name",
							required: true,
						},
						{
							label: "Last Name",
							inputType: "text",
							placeholder: "Enter your last name",
							required: true,
						},
						{
							label: "Email",
							inputType: "email",
							placeholder: "Enter your email address",
							required: true,
						},
						{
							label: "Phone",
							inputType: "tel",
							placeholder: "Enter your phone number",
							required: false,
						},
					],
				},
				{
					type: "table",
					title: "Registered Attendees",
					columns: [
						{
							header: "Full Name",
							accessor: "fullName",
							align: "left",
						},
						{
							header: "Email",
							accessor: "email",
							align: "left",
						},
						{
							header: "Event Registered For",
							accessor: "registeredEvent",
							align: "left",
						},
					],
					rows: [
						{
							cells: {
								fullName: "Alice Wonderland",
								email: "alice.w@example.com",
								registeredEvent: "Tech Conference 2024",
							},
						},
						{
							cells: {
								fullName: "Bob The Builder",
								email: "bob.b@example.com",
								registeredEvent: "Annual Music Festival",
							},
						},
						{
							cells: {
								fullName: "Charlie Chaplin",
								email: "charlie.c@example.com",
								registeredEvent: "Art Exhibition Opening",
							},
						},
					],
				},
				{
					type: "form",
					title: "Create New Registration",
					fields: [
						{
							label: "Event",
							inputType: "text",
							placeholder: "Select event to register for",
							required: true,
						},
						{
							label: "Attendee Name",
							inputType: "text",
							placeholder: "Enter attendee's name",
							required: true,
						},
						{
							label: "Registration Date",
							inputType: "date",
							placeholder: "Enter registration date",
							required: true,
						},
						{
							label: "Status",
							inputType: "text",
							placeholder: "e.g., Confirmed, Pending",
							required: true,
						},
					],
				},
				{
					type: "table",
					title: "Event Registrations",
					columns: [
						{
							header: "Event",
							accessor: "eventName",
							align: "left",
						},
						{
							header: "Attendee Name",
							accessor: "attendeeName",
							align: "left",
						},
						{
							header: "Registration Date",
							accessor: "registrationDate",
							align: "center",
						},
						{
							header: "Status",
							accessor: "status",
							align: "center",
						},
					],
					rows: [
						{
							cells: {
								eventName: "Tech Conference 2024",
								attendeeName: "Alice Wonderland",
								registrationDate: "2024-07-20",
								status: "Confirmed",
							},
						},
						{
							cells: {
								eventName: "Annual Music Festival",
								attendeeName: "Bob The Builder",
								registrationDate: "2024-07-21",
								status: "Confirmed",
							},
						},
						{
							cells: {
								eventName: "Tech Conference 2024",
								attendeeName: "Diana Prince",
								registrationDate: "2024-07-22",
								status: "Pending",
							},
						},
					],
				},
			],
		};
		res.status(200).json(appComponents);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
