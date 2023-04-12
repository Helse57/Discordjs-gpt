import { Client } from "discord.js";
import { join } from "path";
import { readdirSync } from "fs";
import { BotEvent } from "../../types";

module.exports = (client: Client) => {

    const events = [];

  let eventsDir = join(__dirname, "../events");

  readdirSync(eventsDir).forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event: BotEvent = require(`${eventsDir}/${file}`).default;

    event.once
      ? client.once(event.name, (...args) => event.execute(...args))
      : client.on(event.name, (...args) => event.execute(...args));

      events.push(event.name);
      
  });

    console.log(`Loaded ${events.length} events : ` + events.join(", "));
};
