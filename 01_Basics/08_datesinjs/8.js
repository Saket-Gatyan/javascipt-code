// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())

let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()) // month start with 0 in js


// another format
// let myAnotherDate = new Date("2023-01-27") //YY-MM-DD // invalid cz here month starts from 1=>January
// console.log(myAnotherDate.toLocaleString())




// let myTimeStamp = Date.now()
// console.log(myTimeStamp)   // miliseconds value from 1 jan 1970

//used in comparing polls and hotel-booking making
// console.log(myCreatedDate.getTime())


//console.log(Math.floor(Date.now()/1000)); // to convert milisecond to sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)


//`${newDate.getDay()} and the time ` method 2

// good method to customize

let mamamima = newDate.toLocaleString('default',{
    weekday : "long", 
    
})
console.log(mamamima)