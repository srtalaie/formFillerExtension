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
        }, 3000);
    } else {
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: false,
            image: "/images/ezIconLight.png"
        });
    };
}
function buttonClicked(request, sender, senResponse){
    if(request.txt === 'clicked'){
        function doEvent( obj, event ) {
            /* Created by David@Refoua.me */
            var event = new Event( event, {target: obj, bubbles: true} );
            return obj ? obj.dispatchEvent(event) : false;
        }
        
        function runFiller(){
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
        runFiller();
    }

}

function openForm(){
    let giftCardFormBtn = document.querySelector('[data-name="GIFTCARD"]');
    console.log(giftCardFormBtn)
    giftCardFormBtn.click();
    return true;
}

//Click button
function clickButton(){
    let submitButton = document.querySelector('[data-automation-id=submit-apply-gift-card]');
    console.log(submitButton)
    setTimeout(function(){
        submitButton.click();
    }, 1000);
}