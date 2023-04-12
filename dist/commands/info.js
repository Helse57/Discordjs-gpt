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
exports.command = {
    name: "info",
    data: new discord_js_1.SlashCommandBuilder()
        .setName("info")
        .setDescription("Affiche les informations du bot."),
    execute: (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        yield interaction.reply({
            embeds: [
                new discord_js_1.EmbedBuilder()
                    .setAuthor({ name: "GPT Bot" })
                    .setThumbnail("https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=format")
                    .setDescription("GPT Bot est un bot Discord qui utilise l'API OpenAI pour répondre à vos questions.\nBasé sur le model GPT-4, il est capable de répondre à des questions très complexes.\n\nPour démarrer, utilisez la command '/gpt [question]' pour poser une question à GPT.\n")
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
                    .setDescription("Pour inviter le bot : https://discord.com/api/oauth2/authorize?client_id=" +
                    process.env.CLIENT_ID +
                    "&permissions=8&scope=bot")
                    .setFooter({
                    text: "Ping du bot : " + interaction.client.ws.ping + "ms",
                })
                    .setColor("#10a37f"),
            ],
        });
    }),
};
