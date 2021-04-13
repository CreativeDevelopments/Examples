import { Command } from "cdcommands";
export default new Command({
  name: "ban",
  category: "Moderation",
  description: "Bans a member.",
  details: "A member goes bye bye.",
  minArgs: 1,
  usage: "{prefix}ban <member @> [reason]",
  aliases: [],
  botPermissions: ["SEND_MESSAGES", "BAN_MEMBERS"],
  maxArgs: Infinity,
  cooldown: 5000,
  devOnly: false,
  dmOnly: false,
  globalCooldown: 5000,
  guildOnly: true,
  userPermissions: ["SEND_MESSAGES", "BAN_MEMBERS"],
  testOnly: false,
  nsfw: false,
  run: async ({ message, args, client }) => {
    const member =
      message.mentions.members?.first() ||
      message.guild?.members.cache.get(args[0]);
    if (!member) {
      return message.reply(`Please specify a member.`);
    }

    if (member.id === message.author.id) {
      return message.reply(`Please specify a person other then **yourself.**`);
    }

    args.shift();
    let reason = args.join(" ") || `No reason provided.`;

    if (member.bannable) {
      member.ban({ reason: reason });
      client.success({ msg: message, data: `${member.user.tag} was banned!` })
    } else {
      client.error({ msg: message, data: `I couldn't ban ${member.user.tag}` });
    }
  },
});
