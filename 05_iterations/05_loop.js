// const myCoding = [
//     {
//         languageName : "javasript" ,
//         languageFileName : "js"
//     } ,
//     {
//         languageName : "python" ,          // most common data from databases call
//         languageFileName : "py"
//     } ,
//     {
//         languageName : "c++" ,
//         languageFileName : "cpp"
//     } ,



// ]




// const values = myCoding.forEach(  (item) => {     // data bada ho sakta hai like 200-300  
//     console.log(item.languageName);                   // for each doesnt return anything
//     return item;
// }    )

// console.log(values);  // undefined




const myNumbs = [1,2,3,4,5,6,7,8,9,10]

// const newNumbs = myNumbs.filter(  (num) => {
//     return num>4} )                               // filter used to return values

// console.log(newNumbs);


const newNumbs = []
myNumbs.forEach(  (num) => {
    if (num > 4){
        newNumbs.push(num)
    }
}         )

// console.log(newNumbs);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk)=>bk.genre  === 'History'    )  // could also be {bk.genre  === 'History ; return bk}

  userBooks = books.filter( (bk)=> bk.publish  >=1995 && bk.genre === 'History'    ) 
  console.log(userBooks);
  