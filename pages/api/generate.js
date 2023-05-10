const { Configuration, OpenAIApi } = require("openai");

import reportData from "../../data/report.json";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
This is a dataset of observations about a hemp farm, taken over the course of a year one time per month.

Dataset:
`;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query.query;

    const observations = reportData.map(({ observations }) => ({
      observations,
    }));

    const prompt = `
      ${basePromptPrefix}${JSON.stringify(observations)}
      

      Can you tell me ${query}
      `;

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        max_tokens: 500,
      });

      const output = completion.data.choices[0].text;

      return res.status(200).json(output);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method is not allowed" });
  }
}
