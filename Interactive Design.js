"use strict";
import context from "./script/context.js";
import * as Utils from "./script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawGenerative();

function drawGenerative() {
	//serve to draw a black background
	context.fillRect(0, 0, width, height);
	//serve Yellowish outline
	context.fillStyle = "#edbc00";
	context.fillRect(width / 4.5, height / 4.5, width / 1.8, height / 1.8);
	//serve to draw the background inside the upper area of the square
	context.fillStyle = "white";
	context.fillRect(width / 4, height / 4, width / 2, height / 2);
}
//following code serve to draw different circles of different size, all of different shades of Red. their position is randomised but only on the upper area of the rectangle.
drawBubbles();
function drawBubbles() {
	for (let i = 0; i < 100; i++) {
		let x = width / 4 + Math.random() * (width * 0.5);
		let y = height / 4 + (Math.random() * height) / 4;
		//let y = height / 4 - Math.random() * (height / 2);
		context.fillStyle = Utils.hsl(
			Math.random() * 10,
			Math.random() * 100,
			Math.random() * 100
		);
		Utils.fillCircle(x, y, Math.random() * 10);
	}
}

//Serve to draw the right/lower part of the whole design, the color are randomised between dark blue and violet/magenta
drawRightR();
function drawRightR() {
	context.fillStyle = Utils.hsl(209 + Math.random() * 100, 100, 30);
	context.fillRect(width / 2, height / 2, width / 4, height / 4);
}

//Serve to draw the left/lower part of the design, the color are randomised of dark red
drawLeftR();
function drawLeftR() {
	context.fillStyle = Utils.hsl(
		(335 + Math.random()) / 100,
		Math.random() * 100,
		32
	);
	context.fillRect(width / 4, height / 2, width / 4, height / 4);
}
