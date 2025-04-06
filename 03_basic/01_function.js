console.log("***************************Function************************************")

function functionName()
{
    console.log("Function is called")
    
}
functionName()

function addTwoNo(num1,num2)
{
    if(num1===undefined && num2==undefined)
        console.log("please Enter the username")
    return num1+num2
}
const sum = addTwoNo(1,2)
console.log(sum);

const sum2 = addTwoNo("1","a") // javascript not have 
console.log(sum2)

console.log(addTwoNo()); // o/p =>NaN


function CalculateCartPrice(num1,num2,...num3) 
{
    return num1 ,num2,num3
}
console.log(CalculateCartPrice(121,221,3,2,4,22));

/**
 * For Multiple arugement use rest operator(...)
 * convert into array
 */


const user = {
    name:"ankit",
    age:11
}

function handelObje(anyobj) {
    console.log(`Usernanme is ${anyobj.name} and agr is ${anyobj.age}`)
    
}
handelObje(user)
//pasing object to a function

handelObje({
    name:"ankit",
    age:12
})

//passing Anonmous Object to Array 

const arr2 = [1,2,4,5]
function SecElement(anyarr)
{
    return anyarr[2]
}
console.log(SecElement(arr2))

console.log(SecElement[121,12,1,2]);


console.log(addone(4))
function addone(num)
{
    return num+1
}
/**
 * this fallow Hoisting 
 * use the fuction before declaration
 */



console.log(4);
const addtwo = function(num)
{
    return num+2
}
// this lead to Error because Variable Declaration of Fuction not support hoisting

