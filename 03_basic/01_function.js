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


