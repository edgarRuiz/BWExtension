chrome.browserAction.onClicked.addListener(getInfo);

function getInfo(){
	chrome.tabs.sendMessage(tab.id, "Loaded");
}