function getData(){

	var email;
	var project;
	var dashboard;
	var tab;
	var info;

	email = document.getElementsByClassName('email')[0].innerHTML;
	email = 'User: ' + email;

	project = (document.getElementsByClassName('project-text textellipsis')[0] != undefined) ? document.getElementsByClassName('project-text textellipsis')[0].innerHTML : document.querySelectorAll('[data-at]')[0].innerText;
	project = ('Project: ' + project + ' - ' +  location.href.substr(location.href.indexOf('project')+ 8,10));

	if(document.getElementsByClassName('textellipsis dib eightcolmax')[0] != undefined){
		dashboard = document.getElementsByClassName('textellipsis dib eightcolmax')[0].innerText;
		dashboard = ('Dashboard: ' + dashboard + ' - ' + location.href + '\n');
	}else{
		dashboard ='';
	}

	if(document.getElementsByClassName('horizontal-navigation--item navbuttonshade dib current active')[0] != undefined){
		tab = document.getElementsByClassName('horizontal-navigation--item navbuttonshade dib current active')[0].innerText;
		tab = 'Tab: ' + tab;
	}else{
		tab = '';
	}
	

	info = email + '\n' + project + '\n' + dashboard + tab;
	prompt("copy the info" , info);


}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	if(message.txt === 'Loaded'){
		getData();
	}

}