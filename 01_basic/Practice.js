
//Reverse the String using split and  join
let s = "hello"
let ans =  reversestr(s)
console.log(ans);

function reversestr(s)
{
    split_s = s.split("") //return an array  
    
    reversestr = split_s.reverse()
    reversestr = reversestr.join("-") //Return String
    
    return reversestr
}

// String Input: "deepak pal"  String Output: D P
let s2 = "deepak pal"
fun2(s2)
function fun2(s2)
{
    split_s = s2.split(" ")
    maped = split_s.map(word=>word[0].toUpperCase())
    maped=maped.join(".")    
    console.log(maped);
}

// String Input ="JavaScript is fun" , Output =""

let s3 = "java Script is fun"
fun3(s3)
function fun3()
{
    split_s = s.split(' ')
    maped = split_s.map(word=>word.split("").reverse().join(""))
    maped = maped.join(" ")
    console.log(maped)

}

//regular expression => /?=[A-Z]/