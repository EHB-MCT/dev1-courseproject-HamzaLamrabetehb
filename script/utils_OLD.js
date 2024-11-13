"use strict";
import context from "./context.js";

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {number} x1 x coordinate of the center of the ellipse
 * @param {number} y1 y coordinate of the center of the ellipse
 * @param {number} x2 horizontal radius of the ellipse (half of the width)
 * @param {number} y2 vertical radius of the ellipse (half of the height)
 */

export function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

export function strokeCircle(ctx, x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 360);
	ctx.stroke();
}

export function rgb(r, g, b) {
	return "rgb(" + r + "," + g + "," + b + ")";
}
