chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'setSpeed') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (speed) => {
	  document.querySelectorAll('video').forEach((video) => (video.preservesPitch = false));
	  document.querySelectorAll('audio').forEach((audio) => (audio.preservesPitch = false));
          document.querySelectorAll('video').forEach((video) => (video.playbackRate = speed));
          document.querySelectorAll('audio').forEach((audio) => (audio.playbackRate = speed));
        },
        args: [message.speed],
      });
    });
  }
});
