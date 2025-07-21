const coding  = ["js" , "py" ,'ruby' ,'java' ,"cpp" ]

// coding.forEach(function (item){                       // syntax
//          console.log(item);
         

// })


// coding.forEach( (item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // only providing the ref it will print itself cz i have written that in function



// coding.forEach(  (item,index,arr) => {
//     console.log(item,index,arr)

// }   )  

 // output
// js 0 [ 'js', 'py', 'ruby', 'java', 'cpp' ]
// py 1 [ 'js', 'py', 'ruby', 'java', 'cpp' ]
// ruby 2 [ 'js', 'py', 'ruby', 'java', 'cpp' ]
// java 3 [ 'js', 'py', 'ruby', 'java', 'cpp' ]
// cpp 4 [ 'js', 'py', 'ruby', 'java', 'cpp' ]


const myCoding = [
    {
        languageName : "javasript" ,
        languageFileName : "js"
    } ,
    {
        languageName : "python" ,          // most common data from databases call
        languageFileName : "py"
    } ,
    {
        languageName : "c++" ,
        languageFileName : "cpp"
    } ,



]

myCoding.forEach(  (item) => {     // data bada ho sakta hai like 200-300 
    console.log(item.languageName);
}    )