function getData(){

	var email;
	var project;
	var dashboard;
	var tab;
	var info;

	email = document.getElementsByClassName('email')[0].innerHTML;
	console.log('User: ' + email);
	project = document.getElementsByClassName('project-text textellipsis')[0].innerHTML;
	dashboard = document.getElementsByClassName('js-name')[0].innerHTML;
	email = 'User: ' + email;
	project = ('Project: ' + project + ' - ' +  location.href.substr(location.href.indexOf('project')+ 8,10));

	dashboard = ('Dashboard: ' + dashboard + ' - ' + location.href);
	tab = document.getElementsByClassName('dragHandle horizontal-navigation--item navbuttonshade dib current active')[0].innerText;
	tab = 'Tab: ' + tab;

	info = email + '\n' + project + '\n' + dashboard + '\n' + tab;
	prompt("copy the info" , info);


}

window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if (document.getElementsByClassName('email')[0] && document.getElementsByClassName('project-text')[0] && document.getElementsByClassName('js-name')[0] && document.getElementsByClassName('dragHandle horizontal-navigation--item navbuttonshade dib current active')[0] )
         {
            clearInterval (jsInitChecktimer);
            getData();
        }
    }
}