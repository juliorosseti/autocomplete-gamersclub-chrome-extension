const sendMessage = async (obj) => {
  await null;
  window.postMessage(obj, "*");
};

export default {
  sendMessage,
};
