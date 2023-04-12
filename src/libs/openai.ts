import { OpenAIApi, Configuration } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API,
});

export const openai = new OpenAIApi(config);
