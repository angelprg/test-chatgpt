import { Configuration, OpenAIApi } from "openai";

const classifyText = async (text: string) => {
  console.log("text", text);
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Classify the sentiment (only "positive" or "negative") in this text:\n\n"${text}". The sentiment is: `,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  if (response.data.choices[0].text?.toLowerCase().search("positive") !== -1)
    return "positive";
  if (response.data.choices[0].text?.toLowerCase().search("negative") !== -1)
    return "negative";
  return "neutral";
};

export default classifyText;
