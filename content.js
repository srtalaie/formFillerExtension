console.log('Sup');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, senResponse){
    console.log(request.txt);
    if(request.txt === 'clicked'){
        let allInputs = document.getElementsByTagName('input');
        for (input of allInputs){
            input.value = 'Hello World!';
        }
    }
}