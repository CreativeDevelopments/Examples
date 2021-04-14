const { Command } = require("cdcommands");

module.exports = new Command({
    name: 'ping',
    aliases: [],
    description: 'Pong?',
    details: 'Gets the bot latency.',
    minArgs: 0,
    maxArgs: Infinity,
    usage: '{prefix}ping',
    guildOnly: true,
    dmOnly: false,
    devOnly: false,
    testOnly: false,
    nsfw: false,
    cooldown: 5000,
    globalCooldown: 0,
    userPermissions: ['SEND_MESSAGES'],
    botPermissions: ['SEND_MESSAGES'],
    category: 'Misc',
    run: async ({ message, client }) => {
        message.channel.send(`Pong! \`${client.ws.ping}ms\``);
    }
})