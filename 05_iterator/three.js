//for...of is used to iterate over values of iterable objects like arrays, strings, sets, maps, etc.

const arr = [2,3,4,5,6]
const str =['a','b','c','d']

for(const a of arr)
    console.log(a)


//Note: for...of can not use for object 

const myobj = {
    playerName:"Ankit Yadav",
    baseprice:"12Cr",
    Role:"All Rounder"
}

// for(const [key,value] of myobj)
//     console.log(x)  //TypeError: myobj is not iterable

for(const [key,value] of Object.entries(myobj))
{
    console.log(`Key: ${key} | Value is: ${value}`)
}






//**************************************Map************************************** */

