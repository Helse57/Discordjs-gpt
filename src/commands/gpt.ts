import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";
import { openai } from "../libs/openai";

export const command: Command = {
  name: "gpt",
  data: new SlashCommandBuilder()
    .setName("gpt")
    .setDescription("Pose une question à GPT.")
    .addStringOption((option) => {
      return option
        .setName("question")
        .setDescription("La question que tu souhaites poser à GPT.")
        .setRequired(true);
    }),
  execute: async (interaction) => {
    const question = interaction.options.get("question");
    await interaction.deferReply();

    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: question.value.toString(),
        },
      ],
    });

    await interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({ name: "GPT" })
          .setDescription(res.data.choices[0].message.content.toString())
          .setColor("#10a37f"),
      ],
    });
  },
};
