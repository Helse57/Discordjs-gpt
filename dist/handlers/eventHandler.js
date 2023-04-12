"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
module.exports = (client) => {
    const events = [];
    let eventsDir = (0, path_1.join)(__dirname, "../events");
    (0, fs_1.readdirSync)(eventsDir).forEach((file) => {
        if (!file.endsWith(".js"))
            return;
        const event = require(`${eventsDir}/${file}`).default;
        event.once
            ? client.once(event.name, (...args) => event.execute(...args))
            : client.on(event.name, (...args) => event.execute(...args));
        events.push(event.name);
    });
    console.log(`Loaded ${events.length} events : ` + events.join(", "));
};
