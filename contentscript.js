function getData(){

	var email;
	var project;
	var dashboard;
	var tab;
	var info;

	email = document.getElementsByClassName('email')[0].innerHTML;
	console.log('User: ' + email);

	// if(document.getElementsByClassName('project-text textellipsis')[0].innerHTML == 'undefined'){
	// 	project = document.querySelectorAll('[data-at]')[0].innerText;
	// }elese{
	// 	project = (document.getElementsByClassName('project-text textellipsis')[0].innerHTML
	// }
	project = (document.getElementsByClassName('project-text textellipsis')[0] != undefined) ? document.getElementsByClassName('project-text textellipsis')[0].innerHTML : document.querySelectorAll('[data-at]')[0].innerText;


	dashboard = document.getElementsByClassName('textellipsis dib eightcolmax')[0].innerText;
	email = 'User: ' + email;
	project = ('Project: ' + project + ' - ' +  location.href.substr(location.href.indexOf('project')+ 8,10));

	dashboard = ('Dashboard: ' + dashboard + ' - ' + location.href);
	tab = document.getElementsByClassName('horizontal-navigation--item navbuttonshade dib current active')[0].innerText;
	tab = 'Tab: ' + tab;

	info = email + '\n' + project + '\n' + dashboard + '\n' + tab;
	prompt("copy the info" , info);


}

console.log("log something");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	if(message.txt === 'Loaded'){
		getData();
	}

}

// alina.stavarache@unilever.com Project: 1998167124 dashbaord: https://app.brandwatch.com/project/1998167124/dashboards/584264
// extension breaks

// uriel@swarm.lat starbucks

// <span class="selectedText dib doublepadding-right fullwidth textellipsis valignmiddle" data-at="project-selected-class-name">MKT - Research Queries for NLP</span>

// <span class="selectedText dib doublepadding-right fullwidth textellipsis valignmiddle" data-at="project-selected-class-name">Alsea - Starbucks</span>
