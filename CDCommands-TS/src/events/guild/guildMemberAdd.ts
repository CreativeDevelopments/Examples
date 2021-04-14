import { Event } from 'cdcommands';
import { GuildMember } from 'discord.js';
import { CDClient } from 'cdcommands/src/types/helper.types';

export default new Event('guildMemberAdd', (client: CDClient, member: GuildMember) => {
    client.logInfo({ data: `It seems that ${member.user?.tag} has joined a server!` });
})