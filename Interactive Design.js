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

	for (let i = 0; i < 50; i++) {
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
	// Set the color based on whether the bubble is shot
	if (bubble.shot) {
		context.fillStyle = Utils.hsl(Utils.randomNumber(0, 50), 50, 50);
	} else {
		context.fillStyle = "red";
	}

	// Draw a single circle for the bubble
	Utils.fillCircle(bubble.x, bubble.y, 20); // Adjusted the size to a constant value
}

function update() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	context.fillStyle = "#edbc00";
	context.fillRect(width / 4.5, height / 4.5, width / 1.8, height / 1.8);

	context.fillStyle = "white";
	context.fillRect(width / 4, height / 4, width / 2, height / 2);

	drawRightR();
	drawLeftR();
	drawCrest();

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

	// Draw the signature on the bottom right corner
	signature();

	requestAnimationFrame(update);
}

function drawRightR() {
	context.fillStyle = Utils.hsl(209 + Math.random() * 100, 100, 30);
	context.fillRect(width / 2, height / 2, width / 4, height / 4);
}

function drawLeftR() {
	context.fillStyle = Utils.hsl(
		(335 + Math.random()) / 100,
		Math.random() * 100,
		32
	);
	context.fillRect(width / 4, height / 2, width / 4, height / 4);
}

function drawCrest() {
	context.fillStyle = "black";
	Utils.fillCircle(width / 2, height / 2, height / 6);
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

function signature() {
	let sigX = width - 200; // Position 200px from the right edge
	let sigY = height - 100; // Position 100px from the bottom edge

	context.fillStyle = "cyan";
	context.beginPath();
	context.rect(sigX, sigY, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 50, sigY, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 50, sigY - 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 100, sigY - 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 100, sigY - 100, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 50, sigY + 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX + 100, sigY + 50, 50, 50);
	context.fill();
	//basis left
	context.beginPath();
	context.rect(sigX - 50, sigY, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX - 50, sigY + 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX - 100, sigY + 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX - 50, sigY - 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX - 100, sigY - 50, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(sigX - 100, sigY - 100, 50, 50);
	context.fill();
}
