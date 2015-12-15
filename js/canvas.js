var c = document.getElementById("myCanvasTest");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth=14;
ctx.strokeStyle="rgb(76, 164, 245)";
ctx.arc(100, 100, 70, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgb(76, 164, 245)";
ctx.fillStyle="rgb(76, 164, 245)";
ctx.rect(89,68,22,22);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgb(53,99,186)";
ctx.fillStyle="rgb(53,99,186)";
ctx.rect(89,112,22,22);
ctx.fill();
ctx.stroke();
ctx.closePath();
