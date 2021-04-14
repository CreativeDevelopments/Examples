import { Feature } from "cdcommands";
import { CDClient } from "cdcommands/src/types/helper.types";

export default new Feature((client: CDClient) => {
    console.log(`A feature! Also, ${client.user?.tag} has ${client.guilds.cache.size} servers in it!`);
})