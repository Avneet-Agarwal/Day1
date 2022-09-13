console.log("hello world");
var t1= document.getElementById("val1") as HTMLInputElement;
var t2= document.getElementById("val2") as HTMLInputElement;
var t3= document.getElementById("res") as HTMLInputElement;
var submit= document.getElementById("add") as HTMLButtonElement;

var clicked=()=>{

var name1:number = Number(t1.value);
var name2:number = Number(t2.value);
console.log(typeof(name1));
console.log(typeof(name2));
var val3:number = (name1+name2);
t3.value=<string><unknown>val3;
console.log(`The result is ${t3.value}`);
};
//submit.addEventListener('click',clicked);

submit.addEventListener('clicked',clicked);


