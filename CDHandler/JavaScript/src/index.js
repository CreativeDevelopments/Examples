const colour = require("cdcolours");
const { Client } = require("discord.js");
const { CDHandler } = require("cdhandler");
require("dotenv").config();

const client = new Client();

client.on('ready', async () => {
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
    ` Successfully logged in as ${client.user.tag}`,
  );
})

client.login(process.env.TOKEN);