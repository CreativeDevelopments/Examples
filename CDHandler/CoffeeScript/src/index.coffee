# File Name - index.js

colour = require "cdcolours"
Discord = require "discord.js"
{ CDHandler } = require "cdhandler"

client = new Discord.Client();

client.on "ready", =>
  new CDHandler client,
    commandsDir: "commands" # String - commands directory
    eventsDir: "events" # String - events directory
    featuresDir: "features" # String - features directory
    prefix: "!"
    category: "Misc" # String - Default category for commands
    pingReply: true # Boolean - If you want the bot to reply with it's prefix when it gets pinged
    devs: [] # Array - Bot Developer ID's for devOnly commands.
    defaults: true # Boolean - active default commands
    mongo: "Your MongoPath" # String - Connects to MongoDB
    warnings: true # Boolean - active CDHandler warnings

  console.log colour("[READY]", textColour: "green") +
    "Successfully logged in as #{client.user.tag}"
    
# You can get your token by making an application at discord.dev/applications.
client.login "BOT_TOKEN"


# Cannon you'll need to edit this stuff, use dotenv (Ig you can use it for CoffeeScript idk? If you can't just use a config.json file)