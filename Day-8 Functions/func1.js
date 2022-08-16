//QUESTION 1 :- Write a Program to return sum of all Arguments passed to a Function.
     //console.log(add(2, 3));         
     //console.log(add(1, 2, 3, 4, 5)); 
function sum()
{
    var total=0;
    var val= arguments;
    for(x=0;x<arguments.length;x++){
        total=total+arguments[x];
    }
    return total;

}
console.log(sum(2, 3));          
console.log(sum(1, 2, 3, 4, 5)); 

//QUESTION 2 :-Write a Program to return more than one value from a Function.
function details(firstname,lastname, age)
{
return[firstname,lastname,age];
}

var firstname='Avneet';
var lastname='Agarwal';
var age='21';

var det=details(firstname,lastname,age);
console.log(det);


//QUESTION 3 :- Write a code to return entire function definition and display it.

function fullfunc(){


    console.log("hii hello how are you");
    console.log("This is function Definition.");

}

console.log(String(fullfunc));


//QUESTION 4 :- Write a JavaScript program to create a new string adding "New!" in front of a given String. 
//              If the given string begins with "New!" already then return the original string. (Use Functional Approach)


function hey(line)
{
    newline=line.split(" ");
    if (newline[0]!="New!")
    {
        line='New! '+line;
        return(line);

    }
    newline.shift();
    line=newline.join(" ");
    return line;
}

var myline1="New! hii what are you doing here? line 1";
var myline2="hii what are you doing here? line 2";

console.log(hey(myline1));
console.log(hey(myline2));

//QUESTION 5 :- Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. 
//              The string length must be 3 or more. If not, return the original string is returned.  (Use Functional Approach)


function getstr(str)
{
    var finalstr;
    if (str.length<3) return str;
    return(finalstr=str.slice(0,3)+str.slice(-3,));
}

str="PANKAJKAPOOR";
console.log(getstr(str));