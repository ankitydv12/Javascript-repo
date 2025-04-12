//concat => used g=to join the array and the string 
let name = "ankit"
let surname = "yadav"
// console.log(name.concat(surname))


// indexof() and findIndex
let arr =  ["The","Cow","is","elephant"]
// console.log(arr.indexOf("is"))

//sort() => sort according to ASCII value
// console.log(arr.sort())

//ForEach

// for(let i of arr){
//     console.log(i)
// }
// arr.forEach(i=>console.log(i))

//filter
// console.log(arr.filter(word=>word.length>2));
let brr =arr.filter(greaterthree)
console.log(brr)
function greaterthree(e)
{
    if(e.length<3)
        return e
    else 
        return 
}

function myfun1() {
    console.log("jell")
}
function myfun4(){
    console.log("dwes")
}
myfun1(myfun4())
