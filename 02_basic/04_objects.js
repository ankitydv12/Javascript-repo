const tinderuser = new Object()
// this singelton object 

tinderuser.id = "123"
tinderuser.name = "abcd"
tinderuser.age = 23
// add values to element 

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nilesh",
            lastname:"Mishra"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname); // ? check the fullname is exit or not (work as if and else) . This call optional chaining

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//**********************Combing object**************************  */
        //Method 1 (incorrect)
const obj3 = {obj1 , obj2}; console.log(obj3); //problem is same  as Arrays . Object inside the object 
//output { '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }


        //Method 2 (correct)
const obj4 = Object.assign({},obj1,obj2) //return an object 
console.log(obj4);
/**
 * Syntax = cost returnobj = Object.assing(target ,source)
 * Here target is an empty object {} and source are obj1 and obj2 (souce can be multiple) 
 */

        //Method 3 (correct) Most use 
const obj5 = {...obj1,...obj2}


//********************Arrays of Object***********************/

const arrobj = [
    {
        id:1,
        name:"a"
    },
    {
        id:2,
        name:"b"
    },
    {
        id:3,
        name:"c"
    }
]


console.log(arrobj[0].id);
//can be acces by index

//***********Some Method of Object class*********/

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('id'))



//************************Destructuring********************** */
console.log("************************Destructuring********************** *");

const course = {
    courname : "js hindi",
    price:"99",
    courseInst : "Hitesh"
}

// course.courname

const {courseInst:Instructor} = course
console.log(Instructor) 


console.log("************************APIs********************** *");

/**
 * Value come in foam of JSON
 */

// {
//     "name":"ankit",
//     "coursename":"js hindi",
//     "price" : "free"
// }
//this is JSon , * all the value key and value are in string 