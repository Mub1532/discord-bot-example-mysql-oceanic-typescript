import { Constants } from 'oceanic.js';
import { ApplicationCommand } from '../../structures/Command';

export default new ApplicationCommand({
    type: Constants.ApplicationCommandTypes.CHAT_INPUT,
    name: 'modal',
    description: 'Test modal.',
    private: false,
    execute: async ({ interaction }) => {
        interaction.createModal({
            title: 'Hello modal',
            customID: 'helloModal',
            components: [
                {
                    type: Constants.ComponentTypes.ACTION_ROW,
                    components: [
                        {
                            type: Constants.ComponentTypes.TEXT_INPUT,
                            label: 'Your name',
                            customID: 'hlloInput',
                            style: Constants.TextInputStyles.SHORT,
                            required: true
                        }
                    ]
                }
            ]
        });
    }
});
