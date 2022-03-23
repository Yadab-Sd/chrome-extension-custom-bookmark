let primaryColor = "#f48224";
let secondaryColor = "#fff3e0";

try {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ primaryColor, secondaryColor });
    chrome.action.setBadgeText({ text: "ON" });
    chrome.action.setBadgeBackgroundColor({ color: "#009806" });
    console.log(
      "Default background color set to %cgreen",
      `color: ${primaryColor}`
    );
  });
} catch (e) {
  console.error(e);
}
