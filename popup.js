let button = document.getElementById('submit');

button.addEventListener('click', function(){
    console.log('clicked');

    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
        let msg = {
            txt: "clicked"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}, false);