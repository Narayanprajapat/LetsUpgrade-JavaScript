var color = ['aqua', 'burlywood', 'pink', 'rosybrown', 'voilet'];

setInterval(backgroundColor, 5000);

function backgroundColor() {
	var setColor = color.shift();
	document.bgColor = setColor;
	color.push(setColor);
}
