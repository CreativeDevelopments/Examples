import { Command } from 'cdcommands'
export default new Command({
    name: 'ping',
    category: 'Misc',
    description: 'Pong?',
    details: 'Gets the bot latency.',
    maxArgs: Infinity,
    minArgs: 0,
    usage: '{prefix}ping',
    aliases: [],
    botPermissions: ['SEND_MESSAGES'],
    cooldown: 5000,
    devOnly: false,
    dmOnly: false,
    globalCooldown: 5000,
    guildOnly: true,
    userPermissions: ['SEND_MESSAGES'],
    testOnly: false,
    nsfw: false,
    run: async ({ message, args, client }) => {
        message.channel.send(`Pong! \`${client.ws.ping}ms\``)
    }
})