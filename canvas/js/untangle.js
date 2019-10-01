if (untangleGame === undefined) {
var untangleGame = {};
}

// Entry point
$(document).ready(function(){
var canvas = document.getElementById("game");
untangleGame.ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
untangleGame.createRandomCircles(width, height);
});

// script awal
/*
$(document).ready(function(){
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "GOLD";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(210, 100, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
});
*/
