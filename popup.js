// Initialize button with user’s preferred color

try {
  let changeColor = document.getElementById("changeColor");
  console.log(changeColor);

  // When the button is clicked, inject setPageBackgroundColor into current page

  changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });

  // The body of this function will be executed as a content script inside the current page

  function setPageBackgroundColor() {
    chrome.storage.sync.get(
      ["primaryColor", "secondaryColor"],
      ({ primaryColor, secondaryColor }) => {
        document.body.style.background = `linear-gradient(${secondaryColor}, transparent) no-repeat`;
        document.body.style.color = primaryColor;
      }
    );
  }
} catch (e) {
  console.error(e);
}
