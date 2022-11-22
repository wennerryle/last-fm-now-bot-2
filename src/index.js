import bot from "./bot.js";

// commands
import startCommand from "./commands/start.js";
import nicknameCommand from "./commands/nickname.js";
import helpCommand from "./commands/help.js";

import inlineQueryListener from "./inlineQueryListener.js";

bot.start(startCommand);
bot.command("/help", helpCommand);
bot.command("/nickname", nicknameCommand);
bot.on("inline_query", inlineQueryListener);

bot.launch();
