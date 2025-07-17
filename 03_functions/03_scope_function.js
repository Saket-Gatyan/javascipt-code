// let a = "20"
// var b ="21"
// const c ="33"
// console.table([a,b,c])

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))        // this is accessible ok throws no error,still no output

function addone(num){
    return num + 1                
}



addTwo(5)    // cannot , throws ERROR MESSAGE 
const addTwo = function(num){ //    VARIABLES IN JS ARE POWERFUL THEY CAN HOLD FUNCTIONS TOO. 2. THIS SPECIAL INITIALIZATION IS CALLED EXPRESSION 3. addtwo() doesnt contain return vakue of function,  IT JUST STORES THE FUNCTION
    return num + 2
}


