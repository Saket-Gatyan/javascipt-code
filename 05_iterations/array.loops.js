//// +++++  HIGH ORDER ARRAY LOOPS +++ /////

//// 1.  FOR OF LOOP 

// ["", "" , ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);

} 

const greeting = "Hello World!"
for (const greet of greeting) {
    if (greet===' '){
        continue;
    }
    console.log(`Each char is ${greet}`)
    
}