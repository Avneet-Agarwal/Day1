const game=new PIXI.Application({
       height:600,
        width:800,
        backgroundColor:0x3366FF
});
const pbar=document.getElementById('bar');
const ptext=document.getElementById('ptext');
loadAssets([
    { name: "back", url: "bcard.png" },
    { name: "front", url: "fcard.jpg" },
  ], start);
  function start(loader, resources) {
    const back = PIXI.Sprite.from(resources['back'].texture);
    back.height=100;
    back.width=80;
    game.stage.addChild(back);
    const smily = new PIXI.Texture(resources['front'].texture,
    new PIXI.Rectangle(27,22,380,516));
    const front = PIXI.Sprite.from(smily);
    front.height=100;
    front.width=80;
    
    game.stage.addChild(front);
}
function loadAssets(list, onLoadComplete) {
    game.loader.add(list).load(onLoadComplete);
  }

// function preload()
// {
//     pbar.style.width=e.progress*4+"%";
//     ptext.innerText=e.progress+"%";
//     console.log(e.progress);
// }
setTimeout(() => {
    document.getElementById('loaderback').style.display="none";
}, 200);
document.body.appendChild(game.view);
// loadAssets([
//     {name:'bcard',url:'bcard.png'}
// ])
let cards=[];
game.loader.add('bcard','bcard.png');
game.loader.add('fcard','fcard.jpg');
// game.loader.load(
//     () => {
//         for(hie=10;hie<600;hie+=120){
//         for(wid=10;wid<800;wid+=100)
//         {
//         const card = PIXI.Sprite.from('bcard');
//         card.x=wid;
//         card.y=hie;
//         card.height=100;
//         card.width=80;
//         game.stage.addChild(card);      
//         }   
//     }
//         }
//     );


    // const front = PIXI.Sprite.from(smily);
    // // front.scale.set(0.2);
    // // game.stage.addChild(front);
    // var img= PIXI.fromImage('fcard.png');
    const fcard = PIXI.Sprite.from('fcard');
    var baseTexture = new PIXI.BaseTexture(fcard);
    var texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(0, 0, 150, 150));
    var sprite = PIXI.Sprite.from(texture);
    game.stage.addChild(sprite);