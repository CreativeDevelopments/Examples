import colour from "cdcolours";
import { config } from "dotenv";
import { Client } from "discord.js";
import { CDCommands } from "cdcommands";
config();

const client = new Client();

client.on("ready", () => {
  new CDCommands(client, {
    commandsDir: "commands",
    eventsDir: "events",
    featuresDir: "features",
    MessageJSONPath: "message.json",
    testServers: [],
    devs: [],
    defaultPrefix: "!",
    mongoURI: process.env.MONGO_URI,
    cacheUpdateSpeed: 60000 * 5,
    disabledDefaultCommands: [],
    customMessageEvent: true,
  });

  console.log(colour("[READY]", { textColour: "green" }) + ` ${client.user.tag} has logged in!`);
});

client.login(process.env.TOKEN);