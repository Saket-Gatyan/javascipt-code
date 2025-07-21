//// +++++  HIGH ORDER ARRAY LOOPS +++ /////

//// 1.  FOR OF LOOP 

// ["", "" , ""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);

// } 

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     if (greet===' '){
//         continue;
//     }
//     console.log(`Each char is ${greet}`)
    
// }





/// ++++++++++++MAPS+++++++++++++

// map is a obj that holds key value pair and remembers the original insertion order of the keys . Any value (both obj and primitive value ) may be used as either a key or a value. /MDN

// const map = new Map()
// map.set('IN' , "India")                             // not iterable using for-in
// map.set('US',"United States of America")
// map.set('Fr' , "France")
// map.set('IN' , "India")  // this entry is not present. and order is maintained 

// console.log(map); 

// for - off loops

// for (const key of map) {    
//     console.log(key);  // returns a array of [key,value] elements
// }

// for (const [key,value] of map) {
//     console.log(key, ":-"  ,value);  // array is destructured 
    
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}                                            // not possible using for-of  

// for (const key of myObj) {  //myObj is not iterable
//     console.log(key)
    
// }

// const myObj2 = {
//     js : "javascript" ,
//     cpp : 'c++',
//     rb : "ruby",              // iterating for object used for-in
//     swift : "swift by apple"
// }

// for (const key in myObj2) {
//     console.log(key)
// }

// for (const keys in myObj2) {
//     console.log(`${keys} shortcut for ${myObj2[keys]}`)
    
// }

// const programming = ["js" , "c++" , "py" , "java"]
// for (const keys in programming) {
//     console.log(keys)   //for in    // 0 1 2 3  these are the keys of a array 
   
// }

// this is exact reason why different loop is made in js for iteration in array and obj

const map2 = new Map()
map2.set('IN' , "India")
map2.set('US',"United States of America")
map2.set('Fr' , "France")
map2.set('IN' , "India")

for (const i of map2) {
    console.log(i);
    
    
}

c