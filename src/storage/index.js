import ChromeStorage from "./chrome";
import DefaultStorage from "./default";

const set = async (key, value) => {
  if (process.env.NODE_ENV == "development") {
    return await DefaultStorage.set(key, value);
  } else {
    return await ChromeStorage.set(key, value);
  }
};

const get = async (key) => {
  if (process.env.NODE_ENV == "development") {
    return await DefaultStorage.get(key);
  } else {
    return await ChromeStorage.get(key);
  }
};

const remove = async (keys) => {
  if (process.env.NODE_ENV == "development") {
    return await DefaultStorage.remove(keys);
  } else {
    return await ChromeStorage.remove(keys);
  }
};

export default {
  set,
  get,
  remove,
};
