//q1
let firstName = "Swatee";
lastName = "S";
country = "india";
city = "BBSR";
age = 25;
isMarried = false;
const now = new Date();
const year = now.getFullYear();
console.log(firstName, lastName, country, city, age, isMarried, year);
//q2
console.log(typeof "10");
//q3
console.log(parseInt("9.8"));
//q4
let num1 = 5;
let num2 = 5;
console.log(num1 == num2);
//i
let stringT1 = "This string is truthy";
console.log(stringT1);
const int = 50;
console.log(int);
let isOccupied = true;
console.log(isOccupied);
//ii
let stringF = "";
console.log(stringF);
let numF = 0;
console.log(numF);
let isStudying = false;
console.log(isStudying);
//q5
//i
let a = 4;
b = 3;
console.log("4 is greater than 3");
console.log(a > b);
//ii
console.log("4 is greater than equal to 3");
console.log(a >= 3);
//iii
console.log("4 is less than 3 which is false");
console.log(a < b);
//iv
console.log("4 is less than equal to 3 which is false");
console.log(a <= b);
//v
let c = 4;
let d = 4;
console.log("4 is equal to 4");
console.log(c == d);
//vi
console.log("4 === 4");
console.log(c === d);
//vii
console.log("4 is not equal to 4 which is false");
console.log(c != d);
//viii
console.log("4 !== 4 which is false");
console.log(c !== d);
//ix
let e = 4;
let f = "4";
console.log("4 is not equal to '4' which is false");
console.log(e != f);
//x
console.log("4=='4' which is true");
console.log(e == f);
//xi
console.log("e === f is false");
console.log(e === f);
//xii
console.log("python".length > "jargon".length);
//q6

let g = 4;
h = 3;
i = 10;
j = 12;
//i
console.log("g>h && i<j is true");
console.log(g > h && i < j);
//ii
console.log("g>h && i>j is false");
console.log(g > h && i > j);
//iii
console.log("g>h || i<j is true");
console.log(g > h || i < j);
//iv
console.log("g>h || i>j is true");
console.log(g > h || i > j);
//v
console.log("!(g>h) is false");
console.log(!(g > h));
//vi
console.log("!(g<h) is true");
console.log(!(g < h));
//vii
console.log(!false);
//viii
console.log("!(g>h && i<j) is false");
console.log(!(g > h && i < j));
//ix
console.log("!(g>h && i>j) is true");
console.log(!(g > h && i > j));
//x
console.log("!(e === f )is true");
console.log(!(e === f));
//xi
let string = "dragon";
let string2 = "python";

console.log(string.substring(0, 4));
console.log(string2.substring(0, 4));
