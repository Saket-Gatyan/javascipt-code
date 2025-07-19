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

// printing table

// for (let i = 1; i <= 10; i++) {
//     // const element = i;
//     console.log(`the outer loop is ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // const element2 = j;
//         console.log(`${i} X ${j} = ${i*j}`)
   
//     }   
    
// }


//+++++++++++conditions applied on loop++++++//////

for (let i = 1; i < 20; i++) {

    if (i==5){
        console.log('DETECTED 5');
        continue;
    }
    console.log(`the value of i is ${i}`)    
}