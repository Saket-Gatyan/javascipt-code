let score = "33abc"; // if entry is like this mix of number and alphabet the complier will return NaN=>Not a number, Therefore we can make a special case for it while writing code

console.log(typeof score); // in case of null the answer is 0

console.log(typeof(score))// for undefined o/p is again NaN

let valueInNumber = Number(score); // Nan for string
console.log(typeof valueInNumber);
console.log(valueInNumber);

//33 => 33
// "3abc" => NaN
// true => 1 ; false =>0

let isLoggedIn = "";

let booleanIsLoggedIn=Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);
//1 => true ; 0=> false
//""=> false
//"hitesh"=> true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber))

