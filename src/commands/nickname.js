import i18n from "../helpers/i18n.js";
import includesDangerousSymbols from "../helpers/includesDangerousSymbols.js";

export default async (ctx) => {
  const text = ctx.update.message.text;
  const userID = ctx.update.message.from.id;
  const newNickname = text.split(" ")[1];

  const lang = ctx.update.message.from.language_code;

  if (!newNickname) return ctx.reply(i18n(lang, "ifNotSendNickname"));

  if (includesDangerousSymbols(newNickname))
    return ctx.reply(i18n(lang, "badNickname"));

  await users.updateNickname(userID, newNickname);
  return ctx.reply(i18n(lang, "afterSetNickname"));
};
