let score = "33abc"; // if entry is like this mix of number and alphabet the complier will return NaN=>Not a number, Therefore we can make a special case for it while writing code

// console.log(typeof score);  // in case of null the answer is 0

// console.log(typeof(score)) // for undefined o/p is again NaN

let valueInNumber = Number(score); // Nan for string
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

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
// console.log(stringNumber);
// console.log(typeof(stringNumber))

// ************Operations************//
let value =3
let negValue = -value
console.log(negValue);
console.log(2/3)

let str1="hello"
let str2=" Saket"
let str3= str1 + str2;
console.log(str3);

console.log("1"+2);
console.log(1+ "2");
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true);

let num1, num2 , num3 ;
num1 = num2 = num3=2+2;

let gameCounter =100;
++gameCounter;
console.log(gameCounter);