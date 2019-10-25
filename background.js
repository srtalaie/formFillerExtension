chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
    let msg = {
        txt: "clicked"
    }
   chrome.tabs.sendMessage(tab.id, msg);
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        if (msg.value) {
            chrome.browserAction.setIcon({path: msg.image});
        } else {
            chrome.browserAction.setIcon({path: msg.image});
        }
    }
});