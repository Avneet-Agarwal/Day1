//selectors
var canvas=document.getElementById('canvas');
var bulfire=document.getElementById('bulfire');
const ctx= canvas.getContext('2d');
var img =document.getElementById('hi');
var zomb = document.getElementById('zomb');
function erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

objmain={
    x:100,
    y:0,
    height:50,
    width:100,
    change:10,

}
zombie={
    x:400,
    y:400

}
var bullets=[];

ctx.fillStyle='white';
ctx.strokeStyle='black';
ctx.drawImage(img,objmain.x,objmain.y,100,objmain.height);
function fire(){
    var newbul=[objmain.x,objmain.y];
    bullets.push(newbul);
    zomb.style.visibility='hidden';
    console.log(bullets);
    //    ctx.fillArc(objmain.x+100,objmain.y,10,0,Math.pi*2);
        
}

function update(e){
    
    if(e.key==='s' || e.key==='ArrowDown' && (objmain.y+objmain.height)<canvas.height){
        objmain.y+=objmain.change;
    }
    else if(e.key==='w' || e.key==='ArrowUp'&& (objmain.y>0)){
        objmain.y-=objmain.change;
    }
    else if(e.key==='d' || e.key==='ArrowRight' && (objmain.x+objmain.width<canvas.width)){
        objmain.x+=objmain.change;
    }
    else if((e.key==='a' || e.key==='ArrowLeft') && (objmain.x>0)){
        objmain.x-=objmain.change;
    }
    if(e.key===" "){
        fire();
        bulfire.play();
    }
    
}
var h2=document.getElementById('hi2');
var count=0;
var coinScore=0;

updbul();
setInterval(() => {
    count=0;
    console.log(zombie.x=Math.floor(Math.random()*10000)%700);
    console.log(zombie.y=Math.floor(Math.random()*10000)%500);
}, 5000);
 function updbul(){
    erase();
    if (bullets.length>50){
        bullets.shift();
    }
    
    ctx.drawImage(img,objmain.x,objmain.y,objmain.width,objmain.height);
    if (count==0){
        ctx.drawImage(zomb,zombie.x,zombie.y,50,50);
    }

    bullets.forEach(bul => {
        bul[0]+=objmain.change;
    });
    bullets.forEach(bull => {
        ctx.beginPath();
        ctx.arc(bull[0]+130,bull[1]+18,5,0,Math.PI*2);
        ctx.stroke();
        ctx.fill();
    });
    bullets.forEach(x => {
        if ((x[0]>zombie.x  && x[0]<(zombie.x+50)) && (x[1]>zombie.y && x[1]<zombie.y+50)){
            count++;
            bullets=[];
            coinScore++;
            h2.innerText=('Your Total Score : '+ coinScore);

        }
        
    });
    requestAnimationFrame(updbul);
}
document.addEventListener("keydown",update);