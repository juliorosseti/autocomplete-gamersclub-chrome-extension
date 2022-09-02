const permittedTab = "gamersclub.com.br/lobby";

chrome.action.disable();
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    if (tab.url.indexOf(permittedTab) != -1) {
      chrome.action.enable(tabId);
    } else {
      chrome.action.disable(tabId);
    }
  }
});
