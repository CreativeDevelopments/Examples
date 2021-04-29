{ MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping"
  aliases: ["Pong"]
  description: "Replies with Pong!"
  cooldown: "5s"
  cooldownMessage: "Wait {REMAINING} more to execute this command again!"
  minArgs: 0
  maxArgs: 0
  argsMessage:
    "Incorrect Arguments! There are no arguments required for this command!"
  dev: false
  nsfw: false
  botPermissions: ["EMBED_LINKS"]
  botPermissionsMessage:
    "I cannot run this command without the 'Embed Links' permission!"
  category: "Misc"
  run: ({ message, args, client, handler }) ->
    embed = new MessageEmbed().setColor("#00DCFF").setTitle("Pong!");

    message.channel.send embed

    handler.cooldown(message, "5s");
};