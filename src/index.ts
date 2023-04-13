import { Client, Collection, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import { Command } from "../types";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessageReactions
  ],
});

client.commands = new Collection<string, Command>();

const handlersDirs = join(__dirname, "handlers");

readdirSync(handlersDirs).forEach((handler) => {
  require(`${handlersDirs}/${handler}`)(client);
});

client.login(process.env.TOKEN);
