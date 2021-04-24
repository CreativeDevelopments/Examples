import colour from "cdcolours";
import { Client } from "discord.js";
import { CDCommands } from "cdcommands";
import * as dotenv from "dotenv";
dotenv.config();

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
    mongoURI: `${process.env.MONGO_URI}`,
    cacheUpdateSpeed: 60000 * 5,
    disabledDefaultCommands: [],
    customMessageEvent: false,
  });

  console.log(
    colour("[READY]", { textColour: "green" }) +
      ` ${client.user?.tag} has logged in!`
  );
});

client.login(process.env.TOKEN);
