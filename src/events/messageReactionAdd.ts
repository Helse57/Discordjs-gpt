import {
  Client,
  EmbedBuilder,
  Events,
  Interaction,
  MessageReaction,
} from "discord.js";
import { BotEvent } from "../../types";

const event: BotEvent = {
  name: Events.MessageReactionAdd,
  once: false,
  execute: async (reaction: MessageReaction) => {
    if (reaction.partial) {
      // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
      try {
        await reaction.fetch();
      } catch (error) {
        console.error("Something went wrong when fetching the message:", error);
        // Return as `reaction.message.author` may be undefined/null
        return;
      }
    }
    if(reaction.count === 2) {
      console.log("ok !!");
      
    }
    
  },
};

export default event;
