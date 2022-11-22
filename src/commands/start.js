import i18n from "../helpers/i18n.js";

export default async (ctx) =>
  ctx.reply(i18n(ctx.update.message.from.language_code, "start"));
