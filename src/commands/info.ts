import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";

export const command: Command = {
  name: "info",
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Affiche les informations du bot."),
  execute: async (interaction) => {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({ name: "GPT Bot" })
          .setThumbnail(
            "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=format"
          )
          .setDescription(
            "GPT Bot est un bot Discord qui utilise l'API OpenAI pour répondre à vos questions.\nBasé sur le model GPT-4, il est capable de répondre à des questions très complexes.\n\nPour démarrer, utilisez la command '/gpt [question]' pour poser une question à GPT.\n\n"
          )
          .addFields([
            {
              name: "Version",
              value: "1.0.0",
            },
            {
              name: "Auteur",
              value: "Mydao#1366",
            },
          ])
          .setFooter({
            text: "Ping du bot : " + interaction.client.ws.ping + "ms",
          })
          .setColor("#10a37f"),
      ],
    });
  },
};
