import { Collection, CommandInteraction, SlashCommandBuilder } from "discord.js";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string;
            TOKEN: string;
            OPENAI_API: string;
        }
    }
}

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, Command>;
    }
}

export interface BotEvent {
    name: string;
    once?: boolean | false;
    execute: (...args) => void;
}

export interface Command {
    name: string;
    data: SlashCommandBuilder | any,
    async execute: (interaction: CommandInteraction) => Promise<void>;
}

export {}