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
const discord_js_1 = require("discord.js");
const event = {
    name: discord_js_1.Events.MessageReactionAdd,
    once: false,
    execute: (reaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                yield reaction.fetch();
            }
            catch (error) {
                console.error("Something went wrong when fetching the message:", error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }
        if (reaction.count === 2) {
            console.log("ok !!");
        }
    }),
};
exports.default = event;
