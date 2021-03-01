"use strict";
var canvas = undefined;
var canvasContext = undefined;

function start() {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
    drawStuff();
}

document.addEventListener('DOMContentLoaded', start);

function drawStuff() {
    //sky
    canvasContext.fillStyle = "#00BFFF";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    //sun
    canvasContext.fillStyle = "yellow";
    canvasContext.beginPath();
    canvasContext.arc(0, 0, 80, 0, 2 * Math.PI);
    canvasContext.fill()

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "black";
    canvasContext.fillText("Sun", 10, 30);

    //dirt
    canvasContext.fillStyle = "#A07855FF";
    canvasContext.beginPath();
    canvasContext.moveTo(0, 400);
    canvasContext.lineTo(300, 400);
    canvasContext.lineTo(350, 200);
    canvasContext.lineTo(0, 200);
    canvasContext.closePath();
    canvasContext.fill();

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Ground", 10, 380);

    //dirt
    canvasContext.fillStyle = "#A07855FF";
    canvasContext.beginPath();
    canvasContext.moveTo(800, 400);
    canvasContext.lineTo(500, 400);
    canvasContext.lineTo(450, 200);
    canvasContext.lineTo(800, 200);
    canvasContext.closePath();
    canvasContext.fill();

    //river
    canvasContext.fillStyle = "blue";
    canvasContext.beginPath();
    canvasContext.moveTo(300, 400);
    canvasContext.lineTo(500, 400);
    canvasContext.lineTo(450, 200);
    canvasContext.lineTo(350, 200);
    canvasContext.closePath();
    canvasContext.fill();

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("River", 380, 350);

    //house
    canvasContext.fillStyle = "beige";
    canvasContext.beginPath();
    canvasContext.moveTo(100, 300);
    canvasContext.lineTo(200, 300);
    canvasContext.lineTo(200, 250);
    canvasContext.lineTo(100, 250);
    canvasContext.closePath();
    canvasContext.fill();

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("House", 190, 230);

    //house roof
    canvasContext.fillStyle = "brown";
    canvasContext.beginPath();
    canvasContext.moveTo(200, 250);
    canvasContext.lineTo(100, 250);
    canvasContext.lineTo(150, 200);
    canvasContext.closePath();
    canvasContext.fill()

    //house windows
    canvasContext.fillStyle = "cyan";
    canvasContext.beginPath();
    canvasContext.arc(170, 270, 10, 0, 2 * Math.PI);
    canvasContext.fill()
    canvasContext.fillStyle = "cyan";
    canvasContext.beginPath();
    canvasContext.arc(130, 270, 10, 0, 2 * Math.PI);
    canvasContext.fill()

    //mountain
    canvasContext.fillStyle = "brown";
    canvasContext.beginPath();
    canvasContext.moveTo(400, 200);
    canvasContext.lineTo(700, 200);
    canvasContext.lineTo(550, 20);
    canvasContext.closePath();
    canvasContext.fill()

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Mountain", 510, 150);

    //mountain peak
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.moveTo(550, 20);
    canvasContext.lineTo(600, 80);
    canvasContext.lineTo(500, 80);
    canvasContext.closePath();
    canvasContext.fill()

    canvasContext.font = "18px Arial";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Trees", 600, 350);

    canvasContext.save();
    drawTrunks();
    //reset position to draw tree tops
    canvasContext.restore();
    drawLeaves();

    //generate 4 tree trunks
    function drawTrunks() {
        canvasContext.fillStyle = "black";
        canvasContext.beginPath();
        canvasContext.moveTo(500, 300);
        canvasContext.lineTo(510, 300);
        canvasContext.lineTo(510, 250);
        canvasContext.lineTo(500, 250);
        canvasContext.closePath();
        canvasContext.fill();

        for (let i = 0; i < 3; i++) {
            canvasContext.translate(80, 20);
            canvasContext.fillStyle = "black";
            canvasContext.beginPath();
            canvasContext.moveTo(500, 300);
            canvasContext.lineTo(510, 300);
            canvasContext.lineTo(510, 250);
            canvasContext.lineTo(500, 250);
            canvasContext.closePath();
            canvasContext.fill();
        }
    }

    //generate 4 tree tops
    function drawLeaves() {
        canvasContext.fillStyle = "green";
        canvasContext.beginPath();
        canvasContext.moveTo(480, 250);
        canvasContext.lineTo(530, 250);
        canvasContext.lineTo(505, 180);
        canvasContext.closePath();
        canvasContext.fill();

        for (let i = 0; i < 3; i++) {
            canvasContext.translate(80, 20);
            canvasContext.fillStyle = "green";
            canvasContext.beginPath();
            canvasContext.moveTo(480, 250);
            canvasContext.lineTo(530, 250);
            canvasContext.lineTo(505, 180);
            canvasContext.closePath();
            canvasContext.fill();
        }

    }
}