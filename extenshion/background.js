chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["jquery-3.7.1.min.js", "html_parser.js", "content.js"],
      })
      .then(() => {
        console.log("Script injected successfully.");
      })
      .catch((error) => {
        console.error("Script injection failed: ", error);
      });
  }
});
