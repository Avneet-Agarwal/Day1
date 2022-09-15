console.log("hello world");
var t1 = document.getElementById("val1");
var t2 = document.getElementById("val2");
var t3 = document.getElementById("res");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mult = document.getElementById("mult");
var div = document.getElementById("divi");
var addclicked = function () {
    var name1 = Number(t1.value);
    var name2 = Number(t2.value);
    console.log(typeof (name1));
    console.log(typeof (name2));
    var val3 = (name1 + name2);
    t3.value = val3;
    console.log("The result is ".concat(t3.value));
};
var subclicked = function () {
    var name1 = Number(t1.value);
    var name2 = Number(t2.value);
    console.log(typeof (name1));
    console.log(typeof (name2));
    var val3 = (name1 - name2);
    t3.value = val3;
    console.log("The result is ".concat(t3.value));
};
var multclicked = function () {
    var name1 = Number(t1.value);
    var name2 = Number(t2.value);
    console.log(typeof (name1));
    console.log(typeof (name2));
    var val3 = (name1 * name2);
    t3.value = val3;
    console.log("The result is ".concat(t3.value));
};
var divclicked = function () {
    var name1 = Number(t1.value);
    var name2 = Number(t2.value);
    console.log(typeof (name1));
    console.log(typeof (name2));
    var val3 = (name1 / name2);
    t3.value = val3;
    console.log("The result is ".concat(t3.value));
};
//submit.addEventListener('click',clicked);
add.addEventListener('click', addclicked);
sub.addEventListener('click', subclicked);
mult.addEventListener('click', multclicked);
div.addEventListener('click', divclicked);