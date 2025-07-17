const user = {
    username : "Saket",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} no context in global
// in browser global object is window

// function chai(){
//     let username = "saket"
//     console.log(this.username)
// }

// chai()
// ()=>{} // arrow function
const addTwo = (num1,num2)=>{
    return num1+num2;  // explicit return
}

const addTwo = (num1,num2) => (num1+num2) //implicit declaraction

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

console.log(addTwo(3,4)) //7