import { Constants } from "oceanic.js";
import { ApplicationCommand } from "../../structures/Command";

export default new ApplicationCommand({
    type: Constants.ApplicationCommandTypes.CHAT_INPUT,
    name: "ping",
    description: "ping the bot",
    private: false,
    execute: async ({interaction, client})=>{
        interaction.createMessage({
            content: `${interaction.guild?.shard.latency ?? '1st heartbeat not sent.'}`
        })
    }
})