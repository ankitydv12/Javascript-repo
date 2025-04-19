/**
 * ForEach()
 *  Syntax====>   array.forEach(function(currentValue, index, arr))
    *   CurrentValue - the value of an array
    *   index (optional) - the index of the current element
    *   arr (optional) - the array of the current elements
 */
const student =['ankita','phoolandevi','laaldulari','Radhika']
//***********************Function************************ */
// function print(iteam)
// {
//     console.log(iteam);
    
// }
// student.forEach(print)
student.forEach(function print(iteam){console.log(iteam)})


//*************************arrow function***************************** */

student.forEach((currentValue,index,arr)=>{console.table(`${currentValue}.${index},${arr}`)})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((iteam)=>{console.log(iteam)})