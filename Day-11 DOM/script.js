var h1 = document.querySelector('h1');
var mole = document.querySelectorAll(".mole");
var dirt = document.querySelectorAll(".dirt");
var startmud = document.querySelector("#mud");
var startmole = document.querySelector("#mole");
var btn = document.querySelector("#start");
var points = document.querySelectorAll(".points");
var moles = document.querySelectorAll(".mole");
var counter = 0;
function start() {
    h1.style.visibility = "hidden";
    startmud.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    startmole.style.visibility = "hidden";
    
    for (let i = 0; i < 6; i++) {
        dirt[i].style.visibility = "visible";
    }
    for (let i = 0; i < 2; i++) {
        points[i].style.visibility = "visible";
    }

    setInterval(() => {
        var ran = Math.floor(Math.random() * 6);
        moles[ran].style.visibility = "visible";
        setTimeout(() => {
            moles[ran].style.visibility = "hidden";
        }, 1400);
    }, 1500);

}
function clicked() {
    document.getElementById("currentPoint").innerHTML = counter++;


}