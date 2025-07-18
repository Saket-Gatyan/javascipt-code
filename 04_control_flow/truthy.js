const userEmail = []

// if (userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email") 
// }

// if saket@google.com => Got user email
// if '' empty string => dont have user email
// [] empty arry => got user email


// truty and falsly value

// false values

// false , 0 , -0 , bigInt 0n  , '', "", null , underdefined , NaN

// truty values

// true ,1 , 1000 , "james",  "0" , 'false' , " " , [ ] , {}, function(){} (empty function),



// if (userEmail.length == 0){
//     console.log("Array is empty");

// }


//  

// false == 0 => true , false == "" => true , 0=='' true



// Nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10 ; // 5

// val1 = null ?? 10 // 10

// val1 = undefined ?? 15;  // 15

val1 = nul ?? 10 ?? 20 // 10 , first value jo mile 



console.log(val1);


/// ++++++ Ternary Operator++++++++

// condtion ? true : false;

const iceTeaPrice =100
iceTeaPrice >= 80 ? console.log("More than Eighty") : console.log("More than Eighty")