"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousedown = click;

let bubbles = [];

setup();
update();

function setup() {
	let startX = width / 4;
	let startY = height / 4;
	let areaWidth = width / 2;
	let areaHeight = height / 4;

	for (let i = 0; i < 10; i++) {
		let bubble = {
			x: startX + Math.random() * areaWidth,
			y: startY + Math.random() * areaHeight,
			shot: false,
		};
		bubbles.push(bubble);
	}

	for (let i = 0; i < bubbles.length; i++) {
		drawBullsEye(bubbles[i]);
	}
}

function drawBullsEye(bubble) {
	for (let i = 3; i > 0; i--) {
		if (i % 2 === 0) {
			context.fillStyle = "white";
		} else {
			if (bubble.shot) {
				context.fillStyle = "red";
			} else {
				context.fillStyle = Utils.hsl(Utils.randomNumber(0, 360), 50, 50);
			}
		}
		Utils.fillCircle(bubble.x, bubble.y, i * 10);
	}
}

function update() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	context.fillStyle = "#edbc00";
	context.fillRect(width / 4.5, height / 4.5, width / 1.8, height / 1.8);

	context.fillStyle = "white";
	context.fillRect(width / 4, height / 4, width / 2, height / 2);

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

	let startX = width / 4;
	let startY = height / 4;
	let areaWidth = width / 2;
	let areaHeight = height / 4;

	for (let i = 0; i < bubbles.length; i++) {
		// Update position with random movement
		bubbles[i].x += Utils.randomNumber(-2, 2);
		bubbles[i].y += Utils.randomNumber(-2, 2);

		// Constrain bubbles within the area
		bubbles[i].x = Math.max(startX, Math.min(startX + areaWidth, bubbles[i].x));
		bubbles[i].y = Math.max(
			startY,
			Math.min(startY + areaHeight, bubbles[i].y)
		);

		drawBullsEye(bubbles[i]);
	}

	requestAnimationFrame(update);
}

/**
 *
 * @param {MouseEvent} e
 */
function click(e) {
	for (let i = 0; i < bubbles.length; i++) {
		let distance = Utils.calculateDistance(
			e.pageX,
			e.pageY,
			bubbles[i].x,
			bubbles[i].y
		);
		console.log(distance);
		if (distance < 30) {
			bubbles[i].shot = true;
		}
	}
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
