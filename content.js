console.log('Sup');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, senResponse){
    console.log(request.txt);
}