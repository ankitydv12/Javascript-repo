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

console.log(myArray.pop())
//pop the last element(something)

console.log(myArray.includes(5))
// return true if the myarray have 5 

console.log(myArray.indexOf(5))
//give the index of the element 


console.log( myArrays3.join()) //by comma
console.log( myArrays3.join('-'))
console.log( myArrays3.join(" "))
console.log( myArrays3.join("*"))
/**
 * The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
 * if no parameter are given join is comma (,)is used
 *          o/p:
 *              1,2,3,4,5
                1-2-3-4-5
                1 2 3 4 5
                1*2*3*4*5
  */
console.log("This is sorted array ",Array.from("579273298932").sort())

                //*******  slice and splice*********

console.log(myArray.slice(0,3)); // give a porstion of array and exclucde 3rd element
console.log(myArray.splice(0,3)); //cut element from 0 index to 3rd index(include 3rd element)

//*********************************DIFF B/W slice and splice***************************** 
//       slice => No change in the original array
         //splice => element are splice (remove) from the original array
// */









