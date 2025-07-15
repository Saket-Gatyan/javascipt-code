//++++++++++++++ Memory and Stack ++++++++++

//Stack (primitive)  , heap(non-primitive)

// stack works as call by value , generates a copy upon callling 

let myYoutubename = "saketgatyandot.com"

let anotherName = myYoutubename
anotherName = "gatyanrivo"

// console.log(myYoutubename) //saketgatyandot.com
// console.log(anotherName) //gatyanrivo

let userOne = {
    email : "user@gmail.com",
    upi:"user@ybl"
}
// whereas heap works with the concept of call by reference
let userTwo = userOne

userTwo.email = "saketgatyan@google.com"

console.log(userOne.email);
console.log(userTwo.email);