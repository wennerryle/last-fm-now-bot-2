import { access } from "node:fs";

/**
 * Return true if a file exists
 * @param {string} filename path to checking file
 * @return {boolean} result of file existence check
 */
export async function checkExistFile(filename) {
  try {
    await access(filename);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") return false;
    else throw err;
  }
}
