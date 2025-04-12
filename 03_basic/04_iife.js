// An Immediately Invoked Function Expression (IIFE) 
// Used to remove problem for global scope variable

//syntax : ( )( )
//          |  |
//          |  |
//          ---|-----> this contain the the function defination
//             |
//             -----------> this is for execution

// (function myname(name){
//     console.log("Hello I am "+name)
// })("Robert")

(()=>{console.log("This is arrow function")})(); //Note: Use Semicolon at end of line