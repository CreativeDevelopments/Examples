const { Event } = require("cdcommands");

module.exports = new Event("guildMemberAdd", (client, member) => {
    client.logInfo({ data: `It seems that ${member.user?.tag} has joined a server!` });
})