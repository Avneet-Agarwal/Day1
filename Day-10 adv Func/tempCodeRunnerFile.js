var i=0;
var inte= setInterval(() => {
    console.log("hello");
    if (i==4){
        clearInterval(inte);
    }
    i++;
}, 3000);