import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

//indian comedy retro movies
