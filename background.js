chrome.runtime.onMessage.addListener((msg) => {
  if (msg === "ON") {
    chrome.proxy.settings.set({
      value: {
        mode: "pac_script",
        pacScript: {
          data: `
            function FindProxyForURL(url, host) {
              return "PROXY your-server.com:8080";
            }
          `
        }
      },
      scope: "regular"
    });
  }

  if (msg === "OFF") {
    chrome.proxy.settings.clear({});
  }
});