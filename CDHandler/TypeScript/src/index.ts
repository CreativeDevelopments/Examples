import colour from "cdcolours";
import { Client } from "discord.js";
import { CDHandler } from "cdhandler";
import { config as dotenv } from "dotenv";
dotenv();

const client = new Client();

client.on("ready", () => {
  new CDHandler(client, {
    commandsDir: "commands",
    eventsDir: "events", 
    featuresDir: "features",
    prefix: "!",
    category: "Misc",
    pingReply: true,
    devs: ["631632832992903168", "811657485462274129"],
    defaults: true,
    mongo: process.env.MONGO_URI, 
    warnings: true,
  });

  console.log(
    colour("[READY]", { textColour: "green" }) +
      ` Successfully logged in as ${client.user!.tag}`,
  );
});

client.login(process.env.TOKEN);