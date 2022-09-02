const hasData = (key) => {
  return !!localStorage[key] && !!localStorage[key].length;
};

const set = async (key, value) => {
  await null;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    localStorage.setItem(key, value);
  }
};

const get = async (key) => {
  await null;

  if (!hasData(key)) {
    return false;
  }
  var data = localStorage[key];
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

const remove = async (keys) => {
  await null;

  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

export default {
  set,
  get,
  remove,
};
