import localization from "./localization.js";

/**
 * function returning the translated string
 * @param {string} lang which language to choose
 * @param {string} key key from helpers/localization.js
 * @return {string} localizated string
 */
function i18n(lang, key) {
  if (localization[lang]) return localization[lang][key];
  else return localization[localization.recommendLang][key];
}

export default i18n;
