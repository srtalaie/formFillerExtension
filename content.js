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

window.addEventListener('hashchange', function(event){
    console.log(event.target.location.href)
    if(event.newURL === 'https://www.walmart.com/checkout/#/payment'){
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: true,
            image: "/images/ezIconNew.png"
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
            image: "/images/ezIconNewLight.png"
        });
    };
});

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
                applied();
            }, 100);
            setTimeout(function(){
                var el = document.getElementById("number");
                el.value = "6173437768138598";
                doEvent(el, 'input');
            }, 100);
            setTimeout(function(){
                var el2 = document.getElementById("pin");
                el2.value = "3288";
                doEvent(el2, 'input');
            }, 100);
            setTimeout(function(){
                clickButton();
            }, 100);
        }
        runFiller();
    }

}

function applied(){
    console.log('Im running');
    let appliedOverlay = document.createElement('div');
    appliedOverlay.id = "appliedOverlay";
    appliedOverlay.style = `
        height: 100vh;
        width: 100vw;
        z-index: 99;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.65);
        #overlay-img {
           
        }
    `
    appliedOverlay.innerHTML = `
        <img src="${chrome.runtime.getURL("images/applied.PNG")}" style="display: block; margin-left: auto; margin-right: auto; margin-top: 65%;">`;
    document.getElementsByClassName('accordion-inner-wrapper')[0].prepend(appliedOverlay);
    setTimeout(function(){
        document.getElementById("appliedOverlay").style.visibility = "hidden";
    }, 2000);
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