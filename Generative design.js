"use strict";
import context from "./script/context.js";
import * as Utils from "./script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawGenerative();

function drawGenerative() {
	context.fillRect(0, 0, width, height);

	context.fillStyle = "#edbc00";
	context.fillRect(width / 4.5, height / 4.5, width / 1.8, height / 1.8);

	context.fillStyle = "green";
	context.fillRect(width / 4, height / 4, width / 2, height / 2);
}

drawBubbles();
function drawBubbles() {
	for (let i = 0; i < 100; i++) {
		let x = width / 4 + Math.random() * (width * 0.5);
		let y = height / 4 + (Math.random() * height) / 4;
		//let y = height / 4 - Math.random() * (height / 2);
		context.fillStyle = Utils.hsl(1, Math.random() * 100, Math.random() * 100);
		Utils.fillCircle(x, y, Math.random() * 5);
	}
}

drawRightR();
function drawRightR() {
	context.fillStyle = "#004e98";
	context.fillRect(width / 2, height / 2, width / 4, height / 4);
}
drawLeftR();
function drawLeftR() {
	context.fillStyle = "#a50044";
	context.fillRect(width / 4, height / 2, width / 4, height / 4);
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
