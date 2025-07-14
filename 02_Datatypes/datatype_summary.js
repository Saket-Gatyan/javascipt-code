//Primitive 
 
// 7 type : String , Number , Boolean ,null .underdefined ,Symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // ==> underdefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id==anotherId);

const bigNumber = 3465790284038n;
 


// Reference (Non-Primitive)

const heros = ["shaktiman", "naagraj" , "doga" ]

let myObj = {  // datatype could be number string object or array
    name : "hitesh" , // key value
    age : 22 ,
}

const myfunction = function(){
    console.log("Saket");
}
console.log(typeof bigNumber) // bigint
console.log(typeof outsideTemp)  //object
console.log(typeof userEmail)  //underdefined
console.log(typeof myObj) //object
console.log(typeof heros) //object
console.log(typeof myfunction) //function
// basically all primitive datatypes return object with typeof operator even function is called function object

