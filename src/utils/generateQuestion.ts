import { Configuration, OpenAIApi } from "openai";

const prompts = {
  negative:
    "Tuco Salamanca, and he would be very upset. Use bad words in the sentences. Blame the developers.",
  positive:
    "Howard Hamlin, and he would be very happy and appreciative for help. When it sounds natural, congrat the developers.",
};

const generateQuestion = async (sentiment: "positive" | "negative") => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a question to the Housecall Pro support team. Should have about 200 to 230 characters length. Write it as if it where written by the Breaking Bad character ${prompts[sentiment]}. Ommit present yourself.`,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  console.log("response", response);
  return response?.data?.choices?.[0]?.text?.trim();
};

export default generateQuestion;
