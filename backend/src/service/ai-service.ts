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

		let text = response.text;
		if (!text) {
			return { error: "AI failed to extract requirements" };
		}

		// sometimes the AI will return JSON with backticks even when we say not to.
		const lines = text.split("\n");
		if (lines[0].startsWith("```")) {
			text = lines.slice(1, lines.length - 1).join("\n");
		}

		console.log(text);

		return JSON.parse(text);
	}
}
