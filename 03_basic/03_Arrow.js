/**
 * "this" refer to the the object that contain the current function
 */

/*
Let’s understand what happens when a simple JS program is executed.
    The global execution context is created and pushed on the execution stack.
    The engine then executes the code.
    If a function call is encountered, the engine will first compile the code during which a new execution context is created and pushed on the execution stack and finally the code is executed
    Once execution is complete the fn execution context is popped out
*/

/**
 * “Execution Context” is an abstract concept in JS. It’s an object that holds certain information that the function will require to execute. This information contains multiple properties. To name a few
Activation/Variable object => stores information about the arguments passed to the function, variables and functions declared in that function.
Creations of Scope Chain. (you can read more about it here)
Value of this.
 */

/**
 * There are 4 simple rules that describe how “this” works

Default binding
Implicit binding
Explicit binding
“new” operator
 */

//Default binding



//------------------------------------------------------------------------------------------------
// function dosomething()
// {
//     console.log(this.a)
// }
// var  a =12
// var obj ={
//     a: 1,
//     dosomething : dosomething
// }
// obj.dosomething()

/**
 * implicit binding
 *  Calling the function in this way will set the value of “this” in the function’s execution context as “obj
 *  Prefixing the function call with an object reference is an example of “implicit binding”.
 */

//--------------------------------------------------------------------------------------------
// var a =6;
// var obj ={
//     a:12,
//     dosomething : function(){console.log(this.a)}
// }
// var foo = obj.dosomething
// foo() //6


//************************************************************************************************* */

// const user ={
//     username:"ankit",
//     age:21,
//     welcomemsg:function(){console.log(this)}
// }
// user.welcomemsg() //{ username: 'ankit', age: 21, welcomemsg: [Function: welcomemsg] }

// function f1()
// {   
//     username :"ankit yadav"
//     console.log(this.username)
// }
// f1()
//******************************************************************************************************** */


/**
 * hello = function()
 * {
 *  return "Hello World"
 * }
 */

hello = (para=null) =>{console.log("good morning "+para)}
hello("India")

//when one parameter then we can skip parantheses

mess = greeting =>{console.log(`India ${greeting} `)}
mess("Good Morning")

output = (num1 ,num2) =>{return num1+num2}
console.log(output)
//have to mention return keyword

output2 = (num1,num2) =>(num1+num2)
console.log(output2)
//no need to mention return because we use parenthesis instead of braces for loop body
// to return wrap the code into parenthesis 

output3 = (num1,num2) =>({usename:"Sonu Kummar"})
console.log(output3(2,3));
//return the object  *Wrape into parenthesis  

