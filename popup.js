document.addEventListener('DOMContentLoaded', function(){ document.querySelector('button').addEventListener('click',onclick,false)

function onclick (){
	var langMenu = document.getElementById('langs');
	var setLang = langMenu.value;

	//chrome.storage.local.set({lang: setLang}, function() {
  	//	prompt('Language is set to is set to ' + setLang);
	//});

   	chrome.tabs.query({currentWindow: true, active: true},
function(tabs) {
     		chrome.tabs.sendMessage(tabs[0].id,'hi')
        })
    }
}, false)