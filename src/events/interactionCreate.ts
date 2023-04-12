import { Events, Interaction } from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
  name: Events.InteractionCreate,
  once: false,
  execute: async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    await command.execute(interaction);
  },
};

export default event;
