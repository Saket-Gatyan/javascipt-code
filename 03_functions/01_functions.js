// console.log("s"); 
// console.log("a"); 
// console.log("k"); 
// console.log("e"); 
// console.log("t"); 

function sayMyName(){
    console.log("s"); 
    console.log("a"); 
    console.log("k"); 
    console.log("e"); 
    console.log("t"); 
    
}


// function addTwoNumbers(number1,number2){
//     number1+number2;
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1,number2){
    return number1+number2 ;   
}


// addTwoNumbers(3,4) 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,'a') // 3a

// addTwoNumbers(3,null) //3



// const result = addTwoNumbers(3,5)

// console.log("Result: ",result);

function loginUserMessage(username="sam"){ // default value // now the value cant be undefined ever
    if(username==undefined){//(!username){ // underdefined also means false, but for if statement to exectue it should be true..
        console.log("Please enter a Username")
        return;
    }   
    return `${username} just logged in`
}

// console.log(loginUserMessage("Saket"))
console.log(loginUserMessage()) //undefined just logged in

//after including if-statement
