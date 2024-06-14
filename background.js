/*
Open a new tab, and load "my-page.html" into it.
*/

function change_rate() {
    var bodyElement = document.body;
    if(bodyElement.getElementsByTagName('video')[0].playbackRate > 1) {
        bodyElement.getElementsByTagName('video')[0].playbackRate = 1;
    } else {
        bodyElement.getElementsByTagName('video')[0].playbackRate = 5;
    }

}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/

browser.browserAction.onClicked.addListener(change_rate);
 
