var rest=document.getElementById('rest');
var gobut =document.getElementById('gobut');
var restartdiv = document.getElementsByClassName('maindiv');
var x=9;
var sys=setInterval(() => {
    rest.innerText=`Game will Restart in ${x} Seconds`;
    x--;
    if (x<0){
        restartdiv[0].style.display = "none";
        clearInterval(sys,1000);


    }
}, 1000);
gobut.addEventListener('click',()=>{
    restartdiv[0].style.display='none';
});