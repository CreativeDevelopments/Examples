const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Tells you the bot's ping",
    cooldown: "3s",
    cooldownMessage: "Wait {REMAINING} more to use this commanad again!",
    category: "Misc",
    run: ({ message, client }) => {
        message.channel.send(message.author, {
            embed: new MessageEmbed()
                .setColor("#00DCFF")
                .setTitle("Pong!")
                .setDescription(`My ping is ${Math.round(client.ws.ping)}`)
        });
    }
}