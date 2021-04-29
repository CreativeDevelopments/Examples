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
    devs: [],
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