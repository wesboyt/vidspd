/*
Handle the browser action click.
*/

function onError(error) {
    console.log(`Error: ${error}`)
  }
  
  function change_rate(tabs) {
    browser.tabs.executeScript({
      code: `
        var bodyElement = document.body;
        var videoElement = bodyElement.getElementsByTagName('video')[0];
        if (videoElement) {
          if (videoElement.playbackRate > 1) {
            videoElement.playbackRate = 1;
          } else {
            videoElement.playbackRate = 5;
          }
        }
      `
    }).catch(onError);
  }
  
  browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({ active: true, currentWindow: true })
      .then(change_rate)
      .catch(onError)
  });