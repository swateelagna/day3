//1
let b = 20;
let h = 10;
const areaOfTriangle = 0.5 * b * h;
console.log("Enter base: b");
console.log("Enter height: h");
console.log(areaOfTriangle);
//2
let a = +prompt("Enter side a:");
let d = +prompt("Enter side d:");
let c = +prompt("Enter side c:");
console.log(`Perimeter of Triangle is ${a + d + c}`);
//3
let length = prompt("Enter length l:");
let width = prompt("Enter width w:");
console.log(`Area of rectangle is ${length * width}`);
//4
let r = +prompt("Enter side r :");
console.log(`Area of a circle is ${Math.PI * r * r}`);
console.log(`circumference of a circle is ${2 * Math.PI * r}`);

//5-------- need to confirm from Swagat
//6
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
const m = (y2 - y1) / (x2 - x1);
console.log(m);
//7 need to write based on 5th question
//8
let x = -1.5;
let y = (x ^ x) + 6 * x + 9;
console.log(y);
//9
let th = +prompt("Enter hours :");
let rph = +prompt("Enter rent per hour :");
console.log(`Your weekly earning is ${th * rph}`);
//10
let myName = "Swateelagna";
if (myName.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}
//11
let firstName = "Swateelagna";
let lastName = "Sahoo";
if ("firstName".length > "lastName".length) {
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
}
//12
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`);
