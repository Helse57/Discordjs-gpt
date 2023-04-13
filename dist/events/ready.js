"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    execute: (client) => {
        console.log(`Connecté en tant que ${client.user.tag}`);
        client.user.setStatus("dnd");
        client.user.setActivity("GPT-4", {
            type: discord_js_1.ActivityType.Watching,
        });
    },
};
exports.default = event;
