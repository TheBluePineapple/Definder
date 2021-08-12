var lang = 'en';
//chrome.storage.local.get(['lang'], function(result) {
//	lang = result.key;
// 	prompt(result.key);
//	prompt(lang);	
//});
var contextMenuItems = [
	{
		"id": "google",
		"title":"Define",
		"contexts": ["selection"]
	},
	{
		"id": "urban",
		"title":"Slang",
		"contexts": ["selection"]
	},
];
contextMenuItems.forEach(
	element => {
		chrome.contextMenus.create(element);
	}
);

chrome.contextMenus.onClicked.addListener(
	(e)=>{
		switch(e.menuItemId){
			case "google":
				fetch('https://api.dictionaryapi.dev/api/v2/entries/'+lang+'/'+e.selectionText)
					.then(response => response.json())
				  	.then(
					data => {
						try{
							prompt(e.selectionText+": "+data[0].meanings[0].definitions[0].definition); 
						}
						catch(error){
							prompt(e.selectionText+" is not a word");
						}
					});
			    
			break;
			case "urban":
				fetch('http://api.urbandictionary.com/v0/define?term='+e.selectionText)
					.then(response => response.json())
				  	.then(
					data => {
						try{
							prompt(e.selectionText+": "+data.list[0].definition); 
						}
						catch(error){
							prompt(e.selectionText+" is not a word");
						}
					});
			break;
		}
	}
);



