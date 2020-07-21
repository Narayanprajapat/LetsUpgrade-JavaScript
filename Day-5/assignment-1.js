// Ist Condition
var val = Number(prompt('Enter Positive Number:'));

// IInd Condition
var arr = [];
for (let i = 0; i < val; i++) {
	var inputValue = Number(prompt('Enter Array Element'));
	arr.push(inputValue);
}

console.log(`Array: %c${arr}`, 'color:red');

// IIIrd Condition
var oddNumArray = arr.filter((num) => {
	if (num % 2 != 0) return num;
});

console.log(`Odd Numbers In Array: %c${oddNumArray}`, 'color:red');

// IVth Condition
var cube = oddNumArray.map((num) => {
	return num ** 3;
});

console.log(`Cube: %c${cube}`, 'color:red');
