import { Command } from "cdcommands";

export default new Command({
  name: "ban",
  aliases: [],
  description: "Bans a member.",
  details: "A member goes bye bye.",
  minArgs: 1,
  maxArgs: Infinity,
  usage: "{prefix}ban <member @> [reason]",
  guildOnly: true,
  dmOnly: false,
  devOnly: false,
  testOnly: false,
  nsfw: false,
  cooldown: 5000,
  globalCooldown: 0,
  userPermissions: ["SEND_MESSAGES", "BAN_MEMBERS"],
  botPermissions: ["SEND_MESSAGES", "BAN_MEMBERS"],
  category: "Moderation",
  run: async ({ message, args, client }) => {
    const member = message.mentions.members?.first() || message.guild?.members.cache.get(args[0]);
    if (!member)
      return message.reply(`Please specify a member.`);
  
    if (member.id === message.author.id)
      return message.reply(`Please specify a person other then **yourself.**`);

    if (!member.bannable)
      return message.reply(`I canno't ban ${member.user.tag}!`);
  
    const reason = args[1] ? args.slice(1).join(' ') : 'No reason provided';

    try {
      member.ban({ reason, });
    } catch(err) {
      message.channel
        .send("", {
          embed: client.error({
            msg: message,
            data: `Failed to ban ${member.user.tag}`
          })
      });
    }

    message.channel
      .send("", {
        embed: client.success({
          msg: message,
          data: `Successfully banned ${member.user.tag}!`
        })
      });
  },
});
