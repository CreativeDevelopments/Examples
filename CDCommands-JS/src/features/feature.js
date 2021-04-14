const { Feature } = require("cdcommands");

module.exports = new Feature((client) => {
    console.log(`A feature! Also, ${client.user?.tag} has ${client.guilds.cache.size} servers in it!`);
})