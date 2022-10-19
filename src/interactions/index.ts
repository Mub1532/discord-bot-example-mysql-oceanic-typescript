import { AnyInteractionGateway, ComponentInteraction, ModalSubmitInteraction } from 'oceanic.js';
import helloModal from './helloModal';

export type InteractionHandler<Interaction extends AnyInteractionGateway> = (interaction: Interaction) => Promise<void> | void;
export type GenericInteractionHandler = InteractionHandler<ModalSubmitInteraction> | InteractionHandler<ComponentInteraction>;

const mappings: Record<string, GenericInteractionHandler> = {
    helloModal
};

export default mappings;
