// modernise the string

const name = "hitesh"

const repoCount = " 50"
// console.log(name + repoCount+" value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interpolaction : we can create placeholder in which we could inject variables.

const gameName = new String('hiteshhc') //another method to study/declare string as a object , // mastering this only way to master strings in js
// hiteshhc is stored as object with key and value pair.

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4);
console.log(newString);

// const anotherString = gameName.slice(1, 5); // "ites"
const anotherString = gameName.slice(2, -2); // "es"     // if you have trouble with these take help with chat gpt


// const anotherString = gameName.slice(-1)
// console.log(anotherString);
const newStringOne = "   hitesh  ";
console.log(newStringOne)//   hitesh  
console.log(newStringOne.trim())//hitesh  // we can also use start and end value 
// trim works both on whitespaces and endoflines 
//simple to use as .trim() as it trim from both start and end


// replace mehtod
// const url = "https://saket%gatyanongithub.com/gatyan%20";
// console.log(url.replace('%20','-'));
// console.log(url.includes('sundar')) //false
// console.log(url.includes('saket')) //true


// const gameName2 = new String('hites-hh-com') 
// console.log(gameName2.split('-'))

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ",3); // two arguments one is 1.seperator and one 2.limit (indexing from 0)
console.log(words)

// const chars = str.split("");
// console.log(chars)