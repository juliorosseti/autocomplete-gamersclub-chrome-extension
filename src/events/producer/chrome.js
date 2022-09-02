/* global chrome */
const sendMessage = async (obj) => {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);
  const tabId = tabs[0].id;

  chrome.tabs.sendMessage(tabId, obj, () => {});
};

export default {
  sendMessage,
};
