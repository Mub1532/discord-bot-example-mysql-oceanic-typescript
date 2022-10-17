import { CommandInteraction, ComponentInteraction, ModalSubmitInteraction } from "oceanic.js";
import { allCommands } from "../..";
import config from "../../config.json";
import { client, db } from "../../index";
import mappings, { GenericInteractionHandler } from "../../interactions";
import DiscordEvent from "../../structures/Event";


export default new DiscordEvent('interactionCreate', async interaction => {
    // Command interaction.
    if (interaction instanceof CommandInteraction) {
        // Find and run the command.
        const command = allCommands.find(x => x.name === interaction.data.name);
        if (!command) return;

        try {
            command.execute({
                client,
                interaction,
                config,
                db
            });
        } catch (error) {
            console.error(error);
            if(!interaction.acknowledged) return interaction.createMessage({
                content: config.defaultErrMessage
            })
        }
    }

    // Other
    else if (interaction instanceof ComponentInteraction || interaction instanceof ModalSubmitInteraction) {
        if (!interaction.data) return;

        const name = interaction.data.customID;

        const handler: GenericInteractionHandler = mappings[name as keyof typeof mappings];

        if (!handler) return; 

        handler(interaction as unknown as never);
    }

});
