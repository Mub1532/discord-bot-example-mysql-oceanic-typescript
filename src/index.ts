/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Connection, createConnection } from 'mysql2/promise';
import { Client } from 'oceanic.js';
import config from './config.json';
import { CommandType } from './structures/Command';
import DiscordClient from './structures/ExtendedClient';
import getFiles from './util';

export let db: Connection;
export let client: DiscordClient;
export const allCommands = [] as CommandType[];

const eventFiles = getFiles(`${__dirname}/events`).filter(file => file.endsWith(config.prod ? '.js' : '.ts'));
const commandFiles = getFiles(`${__dirname}/commands`).filter(file => file.endsWith(config.prod ? '.js' : '.ts'));

(async () => {
    client = new Client({ auth: `Bot ${config.token}` });

    // Events
    eventFiles.forEach(eventFile => {
        const event = require(eventFile).default;
        // Bind event
        if (event.name === 'ready') {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    });

    // Commands
    commandFiles.forEach(commandFile => {
        const command = require(commandFile).default;
        allCommands.push(command);
    });

    db = await createConnection(config.db);

    await db.connect();

    await client.connect();
})();
