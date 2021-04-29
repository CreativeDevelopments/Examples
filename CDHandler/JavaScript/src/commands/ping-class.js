const { Command } = require("cdhandler");
const { MessageEmbed } = require("discord.js");

/**
 * In your bot you should not do two ping commands. The reason
 * I am putting two ping commands is to show the difference in 
 * doing it as a class. Doing it as a class you will get to use 
 * the intellisense, making it easier for you.
 */

module.exports = new Command({
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
})