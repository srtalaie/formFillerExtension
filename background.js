console.log('Background Running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
    console.log('button clicked');
}