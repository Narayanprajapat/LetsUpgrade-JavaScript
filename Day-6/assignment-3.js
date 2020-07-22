// Input User Name
var userName = prompt('Enter User Name');

// Set Interval For Clock And User Name
setInterval(clock, 1000);

// Clock Function
function clock() {
	// Welcome User Name
	document.querySelector('#welcome').innerHTML =
		'WELCOME&ensp;' + userName + '&ensp;!!';

	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var postFix = 'AM';

	if (hour > 12) {
		postFix = 'PM';
		hour %= 12;
	}
	if (hour < 10) {
		hour = `0${hour}`;
	}
	if (min < 10) {
		min = `0${min}`;
	}
	if (sec < 10) {
		sec = `0${sec}`;
	}
	var time = `${hour} : ${min} : ${sec} ${postFix}`;
	document.querySelector('#time').innerHTML = time;
}

// For Light Mode
function LightMode() {
	document.bgColor = 'white';
	document.fgColor = 'black';
	document.querySelector('#button').setAttribute('onClick', 'DarkMode()');
	document.querySelector('#button').textContent = 'Dark Mode';
}

// For Dark Mode
function DarkMode() {
	document.bgColor = 'black';
	document.fgColor = 'white';
	document.querySelector('#button').setAttribute('onClick', 'LightMode()');
	document.querySelector('#button').textContent = 'Light Mode';
}
