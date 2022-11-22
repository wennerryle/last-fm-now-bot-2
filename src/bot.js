import * as dotenv from "dotenv";
dotenv.config();

import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

export default bot;
