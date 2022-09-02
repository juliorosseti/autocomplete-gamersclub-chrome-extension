const getMessage = (callback) => {
  window.addEventListener("message", (event) => {
    callback(event.data);
  });
};

export default {
  getMessage,
};
