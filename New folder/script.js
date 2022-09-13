// variables
var canvas=document.getElementById('canvas');
const ctx = canvas.getContext('2d');
img= new Image();

ctx.strokeStyle='black';
ctx.fillRect(100,100,100,100);
img.src='arr.png';
ctx.drawImage(img,100,100);