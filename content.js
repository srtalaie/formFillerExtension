console.log('Sup');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, senResponse){
    console.log(request.txt);
    if(request.txt === 'clicked'){
        //Original Code to fill all input elements with text
        // let allInputs = document.getElementsByTagName('input');
        // for (input of allInputs){
        //     input.value = 'Hello World!';
        // }
        let giftCardNumberInput = document.getElementById('giftCardNumberInput');
        let giftCardAccessNumberInput = document.getElementById('giftCardAccessNumberInput');
        giftCardNumberInput.value = 'XXX-XXX-XXX-XXX-XXX';
        giftCardAccessNumberInput = 'XXXXXXXX';
    }
}