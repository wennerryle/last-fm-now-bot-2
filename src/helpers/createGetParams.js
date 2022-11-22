import url from "url";

export function createGetParams(params) {
  return new url.URLSearchParams(params).toString();
}
