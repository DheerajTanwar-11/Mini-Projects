function display(val) {
	document.querySelector(".result").value += val;
	return val;
}

function allclear() {
	document.querySelector(".result").value = "";
}

function solve() {
	let x = document.querySelector(".result").value;

	let y = eval(x);

	document.querySelector(".result").value = y;

	return y;
}
