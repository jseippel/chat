function onButtonClick(id) {
	switch (id) {
		case 'facebook-btn':
			openFacebook();
			break;
		case 'google-btn':
			openGoogle();
			break;
	}
}

function openFacebook() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('facebook-chat').style.display = 'block';
}

function openGoogle() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('google-chat').style.display = 'block';
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function() {
	let buttons = document.getElementsByTagName('button');
	for (let i = 0; i < buttons.length; i++) {
		let button = buttons[i];
		let buttonId = button.id;
		button.addEventListener('click', function(id) {
			onButtonClick(buttonId);
		});
	}
	// iframe loads async, but blocks window.onload, which makes the popup hang
	// This is solved by setting the src after DOM is loaded.
	console.log('hi: ' + document.getElementById('google-chat'));
	document.getElementById('google-chat').src = 'http://hangouts.google.com/';
	document.getElementById('facebook-chat').src = 'http://www.messenger.com/';
});
