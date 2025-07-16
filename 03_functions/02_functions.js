// shopping cart case 
// scenrio ye hai
// user cart mei add kiye jata hai cart mei toh apko pta nhi hai ki kitna number badega aage

function calculateCartPrice(val1,val2,...num1){ //...rest operator
    return num1

}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "saket",
    price : 199,
}
function handleUser(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleUser(user)

handleUser({
    username:"Saket",
    price:200
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))