chrome.runtime.onMessage.addListener(buttonClicked);

window.addEventListener('hashchange', function(event){
    console.log(event.target.location.href)
    if(event.newURL === 'https://www.walmart.com/checkout/#/payment'){
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: true,
            image: "/images/ezIcon.png"
        });    
       
    } else {
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: false,
            image: "/images/ezIconLight.png"
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