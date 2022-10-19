import { allCommands, client } from '../..';
import config from '../../config.json';
import DiscordEvent from '../../structures/Event';

export default new DiscordEvent('ready', async () => {
    console.log(`[Discord] Logged in as ${client.user.tag}`);

    const commands = await client.application.bulkEditGuildCommands(config.guild, allCommands);
    console.log(`[Discord] Successfully registered ${commands.length} commands.`);
});
