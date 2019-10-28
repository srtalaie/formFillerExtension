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
    if(window.location.href === 'https://www.walmart.com/checkout/#/payment' || window.location.href === 'https://www.walmart.com/checkout/#/sign-in'){
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: true,
            image: "/images/ezIcon.png"
        });    
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
}
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
        //    doEvent( el, 'input' ),
        //    doEvent( el2, 'input' ),
        //    clickButton()
           
        // ]

        // funcArray.forEach(element => {
        //     element;
        // })
        // fillGiftCardNumber();
        // fillGiftCardAccessNumber();
        // clickButton();

        //Walmart giftcard number works fine
        // fillGiftCardField();

        // runFuncs();

        // enterCardNum();

        function doEvent( obj, event ) {
            /* Created by David@Refoua.me */
            var event = new Event( event, {target: obj, bubbles: true} );
            return obj ? obj.dispatchEvent(event) : false;
        }
        // var el = document.getElementById("number");
        // el.value = "6173437768138598";
        

        // var el2 = document.getElementById("pin");
        // el2.value = "3288";
        
        function runEm(){
            openForm();
            setTimeout(function(){
                var el = document.getElementById("number");
                el.value = "6173437768138598";
                doEvent(el, 'input');
            }, 100);
            setTimeout(function(){
                var el2 = document.getElementById("pin");
                el2.value = "3288";
                doEvent(el2, 'input');
            }, 100)
            setTimeout(function(){
                clickButton();
            }, 100)
        }

        runEm();

    }

}

//Open gift card form

//Run functions
// function runFuncs(){
//     openForm();
//     setTimeout(function(){
//         fillGiftCardField();
//     }, 100)
// }

function openForm(){
    let giftCardFormBtn = document.querySelector('[data-name="GIFTCARD"]');
    console.log(giftCardFormBtn)
    giftCardFormBtn.click();
    return true;
}

// function enterCardNum(){
//     let numArr = '6173437768138598'.split('');
//     console.log(numArr);
//     let holder = [];
//     let giftCardNumberInput = document.getElementById('number');

//     numArr.forEach(elem => {
//         setTimeout(function(){
//             holder.push(elem)
//             console.log(holder.join(''));
//             giftCardNumberInput.tabIndex = 0;
//             giftCardNumberInput.value = holder.join('')
//         }, 1000)
//     })
// }

//Click button
function clickButton(){
    let submitButton = document.querySelector('[data-automation-id=submit-apply-gift-card]');
    console.log(submitButton)
    setTimeout(function(){
        submitButton.click();
    }, 1000);
}

//Walmart function
// function fillGiftCardField(){
//     let giftCardNumberInput = document.getElementById('number');
//     giftCardNumberInput.defaultValue = '6173437768138598';
//     let giftCardPin = document.getElementById('pin');
//     giftCardPin.defaultValue = '3288';
//     console.log(giftCardNumberInput.defaultValue, giftCardPin.defaultValue)
//     let submitButton = document.querySelector('[data-automation-id=submit-apply-gift-card]');
//     console.log(submitButton)
//     setTimeout(function(){
//         submitButton.click();
//     }, 1000);
// }

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