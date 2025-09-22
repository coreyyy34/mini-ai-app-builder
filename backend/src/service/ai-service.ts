import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({});

export class AiService {
	async generateContent(systemPrompt: string, userPrompt: string) {
		const response = await genAI.models.generateContent({
			model: "gemini-2.5-flash",
			contents: [
				{
					role: "system",
					parts: [{ text: systemPrompt }],
				},
				{
					role: "user",
					parts: [{ text: userPrompt }],
				},
			],
		});

		return response.text;
	}
}
