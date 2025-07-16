// Type Convertion

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 ==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true
// operators work a bit differently 
// the reason is that an equality check == and comparsions > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0;
//that's why null>=0 is true & null > 0 is false


console.log(undefined==0);  // always false
console.log(undefined>0);
console.log(undefined>=0);

