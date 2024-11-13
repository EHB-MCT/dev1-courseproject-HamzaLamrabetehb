"use strict";
import context from "./script/context.js";
import * as Utils from "./script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawGenerative();

function drawGenerative() {
	context.fillRect(0, 0, width, height);

	context.fillStyle = "green";
	context.fillRect(width / 4, height / 4, width / 2, height / 2);
}

drawBubbles();
function drawBubbles() {
	for (let i = 0; i < 100; i++) {
		let x = width / 4 + Math.random() * (width * 0.5);
		let y = height / 4 + (Math.random() * height) / 4;
		//let y = height / 4 - Math.random() * (height / 2);
		context.fillStyle = Utils.hsl(Math.random() * 100, 50, 50);
		Utils.fillCircle(x, y, Math.random() * 5);
	}
}
//	context.fillStyle = Utils.hsl(Math.random() * 350, 50, 50);
//Utils.fillCircle(width / 2, height / 2, 325);

//context.fillStyle = "#a62d3c";
//Utils.fillCircle(width / 2, height / 2, 300);

//for (let i = 0; i < 10000; i++) {
//	let x = Math.random() * width;
//	let y = Math.random() * height;

//	let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
//	if (distance < 300) {
//		context.fillStyle = "green";
//	} else if (distance > 300) {
//		context.fillStyle = "red";
//	}
//	Utils.fillCircle(0, 0, width, height);
