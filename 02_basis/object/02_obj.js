//const tinderUser = new Object() => singleton obj
const tinderUser = {} // non-singleton object
console.log(tinderUser); //{}

tinderUser.id = '123abc'
tinderUser.name = 'Divesh'
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "bheem",
            lastname : "chaturvedi"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:'a',2:'b',3:'c'}
const obj2 = {3:'a',4:'b'} 
// const obj3 = {obj1,obj2}
// console.log(obj3)

// for joining objs
// const obj3 = Object.assign({},obj1,obj2) //target,obj1,obj2,obj3 (target,source)
// console.log(obj3)

// const obj3 = {...obj1,...obj2};
// console.log(obj3)

const users = [
    {
        id : 1,
        email :"a@gmail.com"
    },
    {
        id : 2,
        email :"b@gmail.com"
    },
    {
        id : 3,
        email :"c@gmail.com"
    },
]
// user[1].email
console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // array of keys
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//to check if property is available

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
