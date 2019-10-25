chrome.runtime.onMessage.addListener(buttonClicked);

//Popup on page load
const popupStyle = `
    background-color: white;
    z-index: 99;
    position: absolute;
    right: 2%;
    max-width: 200px;
    top: 3%;
    box-shadow: 1px 1px 1px grey;
    padding: 10px;
    font-family: 'Big Shoulders Display', cursive, Arial, Helvetica, sans-serif;
    text-align: center;
    animation: fadein 10s;
`
window.onload = function (){
    let popup = document.createElement('div');
    popup.style = popupStyle;
    popup.id = "giftCardPopup";
    popup.innerHTML = `
        <p>Congrats, You have a gift card(s) in your wallet that you can use!</p>`;
    document.getElementsByClassName('checkout-wrapper')[0].prepend(popup);
    
    setTimeout(function(){
        document.getElementById("giftCardPopup").style.visibility = "hidden";
    }, 4000);
};

function buttonClicked(request, sender, senResponse){
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

        // let giftCardNumArray = '6167573431101880'.split('');
        // fillGiftCardNum(giftCardNumArray);

        //Calls synchronously original code that worked
        // let funcArray = [
        //    openForm(),
        //    fillGiftCardField()
        // ]

        // funcArray.forEach(element => {
        //     element;
        // })
        // fillGiftCardNumber();
        // fillGiftCardAccessNumber();
        // clickButton();

        //Walmart giftcard number works fine
        // fillGiftCardField();

        runFuncs();
    }

}

//Open gift card form

//Run functions
function runFuncs(){
    openForm();
    setTimeout(function(){
        fillGiftCardField();
    }, 100)
}

function openForm(){
    let giftCardFormBtn = document.querySelector('[data-name="GIFTCARD"]');
    console.log(giftCardFormBtn)
    giftCardFormBtn.click();
    return true;
}

//Walmart function
function fillGiftCardField(){
    let giftCardNumberInput = document.getElementById('number');
    giftCardNumberInput.value = '1234123412341234';
    let giftCardPin = document.getElementById('pin');
    giftCardPin.value = '1234';
    let submitButton = document.getElementsByClassName('submit-save-gift-card');
    console.log(submitButton);
    submitButton[0].click();
}

//Add numbers as if user typed it to hopefully change the field recognize the # as a gift card #
// function fillGiftCardNum(arr){
//     let offset = 0;
//     let giftCardNumberInput = document.getElementById('payment.promotionCode');
//     arr.forEach(num => {
//         setTimeout(function(){
//             let currVal = giftCardNumberInput.value
//             console.log('current value:', currVal)
//             giftCardNumberInput.value = currVal + num;
//             console.log('num + curval:', num, currVal);
//         }, 5500, offset)
//         offset += 5500;
//     })
//     console.log(giftCardNumberInput.value);
// }

// function fillGiftCardNumber(){
//     console.log('Card #');
//     let giftCardNumberInput = document.getElementById('payment.promotionCode');
//     // giftCardNumberInput.id = 'payment.giftCard.code';
//     giftCardNumberInput.defaultValue = '6167573431101880';
// }

// function fillGiftCardAccessNumber(){
//     console.log('Card Access #');
//     let giftCardAccessNumberInput = document.getElementById('payment.giftCard.pin');
//     // giftCardAccessNumberInput.disabled = false;
//     giftCardAccessNumberInput.defaultValue = '5490';
// }

// function clickButton(){
//     console.log('clicked button');
//     let button = document.getElementsByClassName('gift-promo-cards__apply-btn');
//     button.click();
// }

// function onlyTest(){
//     console.log('Test');
// }