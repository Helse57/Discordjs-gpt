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
    name: "image",
    data: new discord_js_1.SlashCommandBuilder()
        .setName("image")
        .setDescription("Génére une image à partir d'un prompt.")
        .addStringOption((option) => {
        return option
            .setName("prompt")
            .setDescription("De quoi veux tu générer une image ?")
            .setRequired(true);
    }),
    execute: (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        const prompt = interaction.options.get("prompt");
        yield interaction.deferReply();
        const res = yield openai_1.openai.createImage({
            prompt: prompt.value.toString(),
            n: 1,
            size: "512x512",
        });
        yield interaction.editReply({
            content: "Voici l'image généré à partir de '" +
                prompt.value +
                "' " +
                res.data.data[0].url,
        });
    }),
};
