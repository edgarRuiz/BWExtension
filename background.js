chrome.browserAction.onClicked.addListener(getInfo);

var message = {
	"txt": "Loaded"
}

function getInfo(tab){
	console.log(tab);
	chrome.tabs.sendMessage(tab.id, message);
}
