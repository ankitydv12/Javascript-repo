const myArray = [0,1,2,3,4,5] // array of number 
const myArrays2 = ['a','c','d'] //of String
const myArrays3 = new Array(1,2,3,4,5) // object type declation
console.table([myArray,myArrays2,myArrays3])

console.log(myArray[3]);
// Property:
    /**
     * Resizeable 
     * Hoterogenius
     * zero Index 
     * array copy operation make shallow copies 
            *Shallow Copies:
                Object who reference same array point .
                change in one object reffer to original Array 
                Mean it create an other variable that reference the same Array object 
            * Deep copy 
                Object who not share same reference   
     */


//Methods in Array
console.log(myArray.push("something")) // add to the end of array
//console.log(myArray.pop()) // pop the last index element
