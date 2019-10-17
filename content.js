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
        // let giftCardNumberInput = document.getElementById('giftCardNumberInput');
        // let giftCardAccessNumberInput = document.getElementById('giftCardAccessNumberInput');
        // giftCardNumberInput.value = '041-291-736-307-395';
        // giftCardAccessNumberInput.value = '75750716';
        //Tried to use two functions to tab into each field and fill the value sequentially
        // Promise.all([fillGiftCardNumber, fillGiftCardAccessNumber]).then(function(){
        //     console.log('worked');
        // });

        //Code for target does not work
        // console.log('Card #');
        // let giftCardNumberInput = document.getElementById('giftCardNumberInput');
        // giftCardNumberInput.value = '041-291-736-307-395';
        // console.log('Card Access #');
        // let giftCardAccessNumberInput = document.getElementById('giftCardAccessNumberInput');
        // giftCardAccessNumberInput.value = '75750716';

        // //Works on J.Crews web site
        // console.log('Card #');
        // let giftCardNumberInput = document.getElementById('giftCard');
        // giftCardNumberInput.value = '041-291-736-307-395';

        //Works on Best Buy's web site
        // let giftCardNumberInput = document.getElementById('payment.promotionCode');
        // giftCardNumberInput.value = '041-291-736-307-395';

        //Works on Best Buy's web site with card # and pin
        fillGiftCardNumber();
        fillGiftCardAccessNumber();
        clickButton();

        //Walmart giftcard number works fine, pin does not show up
        // let giftCardNumberInput = document.getElementById('number');
        // giftCardNumberInput.value = '1234123412341234';
        // let giftCardPin = document.getElementById('pin');
        // giftCardPin = '1234';
    }

}

function fillGiftCardNumber(){
    console.log('Card #');
    let giftCardNumberInput = document.getElementById('payment.promotionCode');
    giftCardNumberInput.id = 'payment.giftCard.code';
    giftCardNumberInput.defaultValue = '6167573431101880';
}

function fillGiftCardAccessNumber(){
    console.log('Card Access #');
    let giftCardAccessNumberInput = document.getElementById('payment.giftCard.pin');
    giftCardAccessNumberInput.disabled = false;
    giftCardAccessNumberInput.defaultValue = '5490';
}

function clickButton(){
    console.log('clicked button');
    let button = document.getElementsByClassName('gift-promo-cards__apply-btn');
    button.click();
}

function onlyTest(){
    console.log('Test');
}