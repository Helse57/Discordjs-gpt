import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";
import { openai } from "../libs/openai";

export const command: Command = {
  name: "image",
  data: new SlashCommandBuilder()
    .setName("image")
    .setDescription("Génére une image à partir d'un prompt.")
    .addStringOption((option) => {
      return option
        .setName("prompt")
        .setDescription("De quoi veux tu générer une image ?")
        .setRequired(true);
    }),
  execute: async (interaction) => {
    const prompt = interaction.options.get("prompt");
    await interaction.deferReply();

    const res = await openai.createImage({
      prompt: prompt.value.toString(),
      n: 1,
      size: "512x512",
    });

    await interaction.editReply({
      content:
        "Voici l'image généré à partir de '" +
        prompt.value +
        "' " +
        res.data.data[0].url,
    });
  },
};
