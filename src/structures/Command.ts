import { Connection } from 'mysql2/promise';
import { CommandInteraction, CreateApplicationCommandOptions } from 'oceanic.js';
import config from '../config.json';
import DiscordClient from './ExtendedClient';

interface ExecuteOptions {
    client: DiscordClient;
    interaction: CommandInteraction;
    config: typeof config;
    db: Connection;
}

type ExecuteFunction = (options: ExecuteOptions) => void;

export type CommandType = CreateApplicationCommandOptions & {
    execute: ExecuteFunction;
    private?: boolean;
};

export class ApplicationCommand {
    constructor(commandOptions: CommandType) {
        Object.assign(this, commandOptions);
    }
}
