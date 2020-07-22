var inputNumber = Number(prompt('Enter Table Number :'));
var table = '';
for (var i = 1; i <= 10; i++) {
	table +=
		inputNumber +
		'&ensp;x&ensp;' +
		i +
		'&ensp;=&ensp;' +
		inputNumber * i +
		'<br>';
}
document.getElementById('table').innerHTML = table;
//
