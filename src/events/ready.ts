import { ActivityType, Client, Events } from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
  name: Events.ClientReady,
  once: true,
  execute: (client: Client) => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    client.user.setStatus("dnd");

    client.user.setActivity("GPT-4", {
      type: ActivityType.Watching,
    });
  },
};

export default event;
