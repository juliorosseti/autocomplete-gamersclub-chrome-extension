/* global chrome */
const getMessage = (callback) => {
  chrome.runtime.onMessage.addListener(function (event) {
    callback(event);
  });
};

export default {
  getMessage,
};
