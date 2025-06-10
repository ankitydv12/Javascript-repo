let marks = "123"

// console.log(typeof marks);
// console.log(typeof(marks));

let numeric_value = Number(marks)
console.log(typeof(numeric_value),numeric_value);

let a = 123
let string_value = String(a)
console.log(typeof string_value , string_value);

/*
    numeric 123 ----(String)---> String "123"
    string "123" ----(numeric)---> numeric 123
  * string "123a" ------(numeric)---> numeric NaN      
*/
let x = -1  
let bool_value = Boolean(x)
console.log(typeof bool_value,bool_value);

/*
    String "Not Empty" ------(Boolean)-------> true
    String ""          ------(Boolean)--------> false
    Numeric 1 any non zero(0) -------(Boolean)-------->true
    Numeric 0  -------(Boolean)-------->        false  
    Numer -1   -------(Boolean) ---- > true        
*/

let float = 2.32

console.log(parseInt(float))



//******************************Operation********************************

let value = 1
console.log(-value); // output=>-1
console.log("1"+2) // output=> 12
console.log(2-"2"); // output=> 0
console.log(1+2+3+"hello") // 6hello

// postfix and prefix .....
let a1 = 3
let a2 = 4
let a3 = ++a2 +( ++a2) //output => 11
console.log(a3);

/*
    Conclusion:
        * postfix --> first operation(=,+,-,/) is performed then increment done 
        * prefix --> first increment is done then operation is performed
*/



