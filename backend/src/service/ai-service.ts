import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({});

export class AiService {
	static async generateContent(systemPrompt: string, userPrompt: string) {
		const response = await genAI.models.generateContent({
			model: "gemini-2.5-flash-lite",
			contents: [
				{
					role: "model",
					parts: [{ text: systemPrompt }],
				},
				{
					role: "user",
					parts: [{ text: userPrompt }],
				},
			],
		});

		const text = response.text;
		if (!text) {
			return { error: "AI failed to extract requirements" };
		}

		console.log(text);

		return JSON.parse(text);
	}
}
