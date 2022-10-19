import { RowDataPacket } from 'mysql2';
import { Constants } from 'oceanic.js';
import { ApplicationCommand } from '../../structures/Command';
import DiscordClient from '../../structures/ExtendedClient';

export default new ApplicationCommand({
    type: Constants.ApplicationCommandTypes.CHAT_INPUT,
    name: 'time',
    description: 'Mysql test command.',
    private: false,
    execute: async ({ interaction }) => {
        const timeQuery = (await DiscordClient.getSQLTime()) as RowDataPacket[] as [{ 'NOW()': Date }];

        const time = timeQuery[0]['NOW()'];

        interaction.createMessage({
            content: time.toString()
        });
    }
});
