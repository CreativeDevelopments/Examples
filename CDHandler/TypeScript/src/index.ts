// File Name - index.js

// You'll need to update this as well, use dotenv.

import colour from "cdcolours";
import * as Discord from "discord.js";
import { CDHandler } from "cdhandler";
import { config as dotenv } from "dotenv";
dotenv();

const client = new Discord.Client();

client.on("ready", () => {
  new CDHandler(client, {
    commandsDir: "commands", // String - commands directory
    eventsDir: "events", // String - events directory
    featuresDir: "features", // String - features directory
    prefix: "!",
    category: "Misc", // String - Default category for commands
    pingReply: true, // Boolean - If you want the bot to reply with it's prefix when it gets pinged
    devs: [], // Array - Bot Developer ID's for devOnly commands.
    defaults: true, // Boolean - active default commands
    mongo: "Your MongoPath", // String - Connects to MongoDB
    warnings: true, // Boolean - active CDHandler warnings
  });

  console.log(
    colour("[READY]", { textColour: "green" }) +
      ` Successfully logged in as ${client.user!.tag}`,
  );
});
// You can get your token by making an application at discord.dev/applications.
client.login("BOT_TOKEN");