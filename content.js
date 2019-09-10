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
        
        //For target need to tab in the giftcard number field and fill number then move
        //to giftcard access number field and fill number
        let giftCardNumberInput = document.getElementById('giftCardNumberInput');
        let giftCardAccessNumberInput = document.getElementById('giftCardAccessNumberInput');
        giftCardNumberInput.value = '111-111-111-111-111';
        giftCardAccessNumberInput.value = '11111111';
    }
}