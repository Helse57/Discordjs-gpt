import { Client, REST, Routes } from "discord.js";
import { join } from "path";
import { readdirSync } from "fs";
import { Command } from "../../types";

module.exports = async (client: Client) => {
  const commands = [];
  const body = [];
  let commandsDir = join(__dirname, "../commands");

  readdirSync(commandsDir).forEach((file) => {
    if (!file.endsWith(".js")) return;

    const command: Command = require(`${commandsDir}/${file}`).command;

    body.push(command.data.toJSON());
    client.commands.set(command.name, command);
    commands.push(command.name);
  });

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: body,
    });
  } catch (error) {
    console.error(error);
  }
  console.log(`Loaded ${commands.length} commands : ` + commands.join(", "));
  
};
