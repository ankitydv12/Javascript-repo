// promise take a callback function = function(resolve,reject)
// promise are created and then consume


//make promise 
const promiseone = new Promise(function(resolve,reject){
    //do an asyn task like -> DB call, cryptography , network calll

    setTimeout(function(){console.log("Asyn");
        resolve()
    },1000)
    
});

//consuming a promise 
// then is connected to resolve
promiseone.then(function(){
    console.log('promise consumed')
})


//another way 

new Promise(function(resolve, reject){
    setTimeout(()=>console.log('this is another way'),100);
    resolve()
}).then(function(){
    console.log('this is after then method')
})



//promiss3 
//Getting the data from the resolve 
const promissthree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Know we send data to then")
        resolve({username:'ankitydv12',age:'12'})
        //usually object is send 
    },1000)
})

promissthree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setInterval(function(){
        let error = false;
        if(!error)
            resolve({username:"chai",email:"chai#example.com"})
        else
            reject({error:"Something went wrong"})
    },1000)
})
.then(function(user)
{
    return user.username
}).then(function(username){console.log(username)})
.catch(function(user){
    console.log(user)
}).finally(function(){
    console.log('alw')
})


const promisefive = new Promise(function(resolve,reject){
    setInterval(function(){
        let error = true;
        if(!error)
            resolve({username:"chai",email:"chai#example.com"})
        else
            reject({error:"Something went wrong"})
    },1000)
})


async function consumePromiseFive(params) {
    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error);
        
    } 
}
consumePromiseFive()



async function getAlluser() {
   try {
    const response = await fetch('https://api.github.com/users/ankitydv12')
    const data = await response.json();
    console.log(data)
   } catch (error) {
    console.log(error);
    
   }
    
}
getAlluser()

//using fetch
//
fetch('https://api.github.com/users/ankitydv12')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))