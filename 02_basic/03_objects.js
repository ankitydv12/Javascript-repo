
/**
 * Singleton:
    * when object is created by constructor 
    *  
 * Literals
    * When object is created by literals
    * const jsuser ={} 
 */

const mysyb = Symbol("keys")
const jsuser ={     // object created (Literal)
    "name":"Ankit",
    age : 19,
    loc : "UP",
    email:"ankit@god.com",
    isLoggedIn:false,
    lastLoginDays:["mon","tues"],
    [mysyb] : "keyinobj" // adding symbol to object .
} 

console.log(jsuser.email)
console.log(jsuser["name"])
// ways of accessing values of object
/**
 * Note : all the keypair in the object like name ,age ,email,isLoggedIn,lastLoginDays are treated as String.
 */

jsuser.name = "suhani"
console.log(jsuser["name"])
//overWritting the objects


// Object.freeze(jsuser)
// //freexing the object 
// jsuser.age=2121
// console.log(jsuser.age); // no change because it is freez


//**********************FUNCTION IN JS OBJECT ***********/
jsuser.greeting = function (){

    console.log("I am done")
    
}
jsuser.greetingtwo = function (){

    console.log(`"Hello Js user ${this.name}"`)
    
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())