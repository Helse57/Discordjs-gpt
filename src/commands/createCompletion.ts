import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../types";
import { openai } from "../libs/openai";

export const command: Command = {
  name: "question",
  data: new SlashCommandBuilder()
    .setName("question")
    .setDescription("Pose une question à GPT.")
    .addStringOption((option) => {
      return option
        .setName("question")
        .setDescription("Ta question que tu veux poser à GPT")
        .setRequired(true);
    }),
  execute: async (interaction) => {
    const question = interaction.options.get("question");
    await interaction.deferReply();

    const res = await openai.createChatCompletion({
      model: "gpt-4",
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
          .setAuthor({ name: "GPT-4" })
          .setDescription(res.data.choices[0].message.content.toString())
          .setColor("#ff8e4d"),
      ],
    });
  },
};
