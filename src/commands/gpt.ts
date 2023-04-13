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
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: question.value.toString(),
        },
      ],
    });

    const message = await interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({ name: "GPT" })
          .setThumbnail(
            "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=format"
          )
          .setDescription(res.data.choices[0].message.content)
          .setColor("#10a37f"),
      ],
    });

    message.react("🔁");
  },
};
