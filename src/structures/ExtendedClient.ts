import { Client } from "oceanic.js";
import { db } from "..";

export default class DiscordClient extends Client {
    // Just as an example
    static async getSQLTime(){
        const [time] = await db.execute("SELECT NOW();");

        return time;
    }
}
