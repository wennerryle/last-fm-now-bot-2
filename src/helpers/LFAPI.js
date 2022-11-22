import axios from "axios";
import { createGetParams } from "./createGetParams";

/**
 * last.fm API class
 */
export class LFAPI {
  /**
   *
   * @param {string} apiKey API key from https://www.last.fm/api/account/create
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async invoke(method, params) {
    try {
      const urlApi = "http://ws.audioscrobbler.com/2.0/?method=";

      const response = await axios.get(
        urlApi +
          method +
          "&" +
          createGetParams({
            api_key: this.apiKey,
            format: "json",
            ...params,
          })
      );
    } catch (err) {
      console.log("Last.fm API ERROR: " + err);
    }
  }
}
