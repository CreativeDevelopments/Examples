colour = require "cdcolours";
{ Client } = require "discord.js";
{ CDHandler } = require "cdhandler";

client = new Client();

client.on "ready", =>
  new CDHandler client,
    commandsDir: "commands"
    eventsDir: "events" 
    featuresDir: "features"
    prefix: "!"
    category: "Misc"
    pingReply: true 
    devs: []
    defaults: true 
    mongo: "Your MongoPath"
    warnings: true

  console.log colour("[READY]", textColour: "green") +
    "Successfully logged in as #{client.user.tag}"
    
client.login "BOT_TOKEN"