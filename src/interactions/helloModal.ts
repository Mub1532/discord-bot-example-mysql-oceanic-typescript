import { ModalSubmitInteraction } from 'oceanic.js';

export default function helloModal(interaction: ModalSubmitInteraction) {
    const data = interaction.data.components[0].components[0].value;

    interaction.createMessage({ content: `hello ${data}` });
}
