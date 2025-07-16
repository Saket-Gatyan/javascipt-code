// objects could be declared as 1.literal 2.constructor

//  singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Saket",
    "full name" : "Saket Gatyan", // cannot access this with help of JsUser.full name
    age: 18 ,
    email : "saket@google.com" ,
    location : "bokaro",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    [mySym] : "key1"

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( typeof (JsUser[mySym]))

// JsUser.email = "saket@openai.com"
// console.log(JsUser)
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser)
console.log(JsUser.greeting) // returns function ref
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())