import axios from "axios";

export async function callGemini(
  geminiKey: string,
  promptToRefine: string,
  delayMs = 6000
) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;

  while (true) {
    try {
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `You will receive a prompt that has to be improved for LLMs to understand it better. You should ONLY answer back with the improved prompt
                Prompt to improve: '${promptToRefine}'
                Answer the improved prompt in the same language that the prompt to improve is in`,
              },
            ],
          },
        ],
      };

      const response = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data.candidates[0].content.parts[0].text;
    } catch (e) {
      console.error(e, `Error: Retrying in ${delayMs / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}
