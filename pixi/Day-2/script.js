const game=new PIXI.Application({
       height:600,
        width:800,
        backgroundColor:0x3366FF
});
const pbar=document.getElementById('bar');
const ptext=document.getElementById('ptext');
function preload()
{
    pbar.style.width=e.progress*4+"%";
    ptext.innerText=e.progress+"%";
    console.log(e.progress);
}
document.body.game.appendChild(game.view);
loadAssets([
    {name:'bcard',url:'bcard.png'}
])
// game.loader.add('card','bcard.png');
// game.loader.load(
//     () => {
//         for(hie=10;hie<600;hie+=120){
//         for(wid=10;wid<800;wid+=100)
//         {
//         const card = PIXI.Sprite.from('card');
//         card.x=wid;
//         card.y=hie;
//         card.height=100;
//         card.width=80;
//         game.stage.addChild(card);      
//         }   
//     }
//         }
//     );
