import { Event } from 'cdcommands'
import { CDClient } from 'cdcommands/src/types/helper.types'
import { GuildMember } from 'discord.js'

export default new Event('guildMemberAdd', (client: CDClient, member: GuildMember) => {
    console.log(`It seems that ` + member.user?.tag + ` Has joined a server.`)
})