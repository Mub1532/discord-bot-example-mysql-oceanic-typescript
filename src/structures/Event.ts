import { ClientEvents } from 'oceanic.js';

export default class DiscordEvent<Key extends keyof ClientEvents> {
    constructor(public name: Key, public execute: (...args: ClientEvents[Key]) => void) {}
}
