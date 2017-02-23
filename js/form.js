'use strict';


var form = document.getElementById('kontaktform');

form.addEventListener('submit', function (event) {
   event.preventDefault();
   var data = new FormData(form);
   send(data);
});

function send (data){
	var request = new XMLHttpRequest();
	request.open('POST','php/kontakt.php');
	request.addEventListener('load', function() {
		if (request.status >= 200 && request.status < 300) {
			console.log(request.responseText);
			document.getElementById('kontaktform').reset();
			document.getElementById('send_btn').className = 'w3-hide';
			document.getElementById('form_response').innerHTML = "Vielen Dank, Ihre Anfrage wurde erfolgreich versendet. Wir melden uns schnellst m&ouml;glichst bei Ihnen.";
			var classes = document.getElementById('form_response').className;
			document.getElementById('form_response').className = classes + " w3-text-light-green";
		} else {
			console.warn(request.statusText, request.responseText);
			document.getElementById('send_btn').className = 'w3-hide';
			document.getElementById('form_response').innerHTML = "Ihre Anfrage konnte leider nicht versendet werden. Bitte versuchen Sie es zu einem sp&auml;teren Zeitpunkt nochmals oder kontaktieren Sie uns telefonisch. Vielen Dank.";
			var classes = document.getElementById('form_response').className;
			document.getElementById('form_response').className = classes + " w3-text-red";
		}
	});
	request.send(data);
}