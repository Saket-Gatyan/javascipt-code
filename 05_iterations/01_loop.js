// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// console.log(element) // not accessible


// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element ==5){
//         console.log("5 is the best number")
//     }
//     console.log(element)

// }


for (let i = 0; i <= 10; i++) {
    // const element = i;
    console.log(`the inner loop is ${i}`)
    for (let j = 0; j <= 10; j++) {
        // const element2 = j;
        console.log(`the outer loop is ${i} and inner loop is ${j}`)
   
    }   
    
}