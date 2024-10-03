"use strict";

alert("Draw your space invader here");

console.log("test");

signature();

function signature() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.rect(100, 100, 300, 300);
	context.fill();

	context.fillStyle = "cyan";
	context.beginPath();
	context.rect(125, 150, 50, 100);
	context.fill();

	context.beginPath();
	context.rect(175, 200, 50, 100);
	context.fill();

	context.beginPath();
	context.rect(125, 300, 100, 50);
	context.fill();

	context.beginPath();
	context.rect(225, 250, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(275, 200, 50, 100);
	context.fill();

	context.beginPath();
	context.rect(325, 150, 50, 100);
	context.fill();

	context.beginPath();
	context.rect(275, 300, 100, 50);
	context.fill();
}
