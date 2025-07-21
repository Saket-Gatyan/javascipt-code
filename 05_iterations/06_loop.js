const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbs = myNumers.map ( (num) => {return num+10})


// console.log(newNumbs);


// +++++++++++++++chaining method++++++

const newNumbs = myNumers
                        .map( (num) => num * 10 )  // array already made here
                        .map((num) => num +1)                // the array generated above is passed here
                        .filter((num) => num>=40    )
console.log(newNumbs);
