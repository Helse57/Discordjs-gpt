"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const openai_1 = require("../libs/openai");
exports.command = {
    name: "question",
    data: new discord_js_1.SlashCommandBuilder()
        .setName("question")
        .setDescription("Pose une question à GPT.")
        .addStringOption((option) => {
        return option
            .setName("question")
            .setDescription("Ta question que tu veux poser à GPT")
            .setRequired(true);
    }),
    execute: (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        const question = interaction.options.get("question");
        yield interaction.deferReply();
        const res = yield openai_1.openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: question.value.toString(),
                },
            ],
        });
        yield interaction.editReply({
            embeds: [
                new discord_js_1.EmbedBuilder()
                    .setAuthor({ name: "GPT-4" })
                    .setDescription(res.data.choices[0].message.content.toString())
                    .setColor("#ff8e4d"),
            ],
        });
    }),
};
