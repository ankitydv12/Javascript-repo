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

console.log(regularUser.fullname.firstname);
