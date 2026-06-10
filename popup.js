document.getElementById("on").onclick = () => {
  chrome.runtime.sendMessage("ON");
};

document.getElementById("off").onclick = () => {
  chrome.runtime.sendMessage("OFF");
};