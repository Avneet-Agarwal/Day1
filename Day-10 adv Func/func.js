//  1. Write a Program to use call() and apply() Method.

// var Countries=
// {
//     name:'India' ,
//     capital:'Delhi',
//     detail:function(){
//         return this.name + " " + this.capital;
//     },
//     detailall:function(popu,litrate){
//         return this.name + "    " + this.capital + "     "  + popu+ "    " + litrate;
//     }

// };


// var country1=
// {
//     name:"rajasthan",
//     capital:"Jaipur",
// };

// console.log(Countries.detailall.call(country1,'12000000000',86.49));
// console.log(Countries.detailall.apply(country1,['12000000000',86.49]));



//2. Write a Program to create an array having cube root of every element of another array. var numbers = [8,27,64,125,216];

// var numbers = [8,27,64,125,216];

// var cbroot= numbers.map((i)=>Math.cbrt(i))
// console.log(cbroot);


//3. Write a Program to call a function in an interval of 3 sec for 5 times.
// var i=0;
// var inte= setInterval(() => {
//     console.log("hello");
//     if (i==4){
//         clearInterval(inte);
//     }
//     i++;
// }, 3000);


// 4. Write a Program to iterate an Array of Objects using map function.
var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 }
  ];
function pri(people)
{
return "Name  : "+people.name +" Age : " + people.age;
}
var out=people.map(pri);
for(var i=0;i<people.length;i++)
{
document.write('<h1 style="text-align:center; color:red;">'+out[i]+'</h1>');
}