import { LFAPI } from "./helpers/LFAPI";

export default (async function (ctx) {
  const ID = ctx.update.inline_query.from.id;
  const username = "@" + ctx.update.inline_query.from.username;
  const isUserExists = await users.isUserExists(ID);

  if (!isUserExists) {
    return ctx.answerInlineQuery([], {
      is_personal: true,
      switch_pm_text: "Для продолжения авторизируйтесь",
      switch_pm_parameter: "1",
      cache_time: 0,
    });
  }

  let tracks = await LFAPI.invoke("user.getrecenttracks", {
    limit: 1,
    user: await users.getNicknameWithID(ID),
  });

  console.log(tracks.recenttracks.track);

  if (!tracks) {
    return ctx.answerInlineQuery([], {
      is_personal: true,
      switch_pm_text: "Введите ник last.fm",
      switch_pm_parameter: "1",
      cache_time: 0,
    });
  }

  let lastTrack = tracks.recenttracks.track[0];
  if (!lastTrack) {
    return ctx.answerInlineQuery([], {
      is_personal: true,
      switch_pm_parameter: "1",
      switch_pm_text: "Вы сейчас ничего не слушаете",
      cache_time: 0,
    });
  }

  const artist = lastTrack.artist["#text"];
  const titleOfSong = lastTrack.name;
  const album = lastTrack.album["#text"];
  const image = lastTrack.image[2]["#text"] || "https://cataas.com/cat";

  const urlImage = await imageGenerate(
    username,
    artist,
    titleOfSong,
    album,
    image
  );

  console.log(urlImage.image.url);

  const res = [
    {
      type: "photo",
      id: uuidv4(),
      photo_url: urlImage.image.url,
      thumb_url: urlImage.image.url,
      input_message_content: { message_text: artist + " - " + titleOfSong },
    },
  ];

  return ctx.answerInlineQuery(res, {
    is_personal: true,
    cache_time: 0,
  });
});
