/* global chrome */
const set = async (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve();
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

const get = async (key) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, (value) => {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

const remove = async (keys) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(keys, () => {
        resolve();
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

export default {
  set,
  get,
  remove,
};
