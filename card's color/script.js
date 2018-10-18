function changeColor(){
	let card = document.querySelector("div");
	let red = parseInt(Math.random() * 256);
	let green = parseInt(Math.random() * 256);
	let blue = parseInt(Math.random() * 256);
	card.style["background-color"] = "rgb(" + red +"," + green + "," + blue + ")";
}