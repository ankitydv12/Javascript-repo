let score = 100
console.log(typeof score)
// Creating a Variable of Number Type 



let balance  =  new Number(200.42320)
x = typeof balance

console.log(`The balance is ${x} and the value is ${balance}`)
// creating a object of number type


// methods of Number objects:
  // * toString  => change number  to string 
    console.log(balance.toString(),"=> this is String");
  // * toFixed() => fixed the digit after points(decimal)
    console.log(balance.toFixed(3))
  // * Precision of the Number
    console.log(balance.toPrecision(4))  
  // * convert of another number system
    console.log(balance.toLocaleString("en-IN"))  

//********************************************MATHS*******************************************************

        console.log("*******************************MATHS******************************************")

            /*
                * basic methods => floor , ciel , round ,etc
                Math.round() => give random value between o and 1

            */
           // console.log(Math.random()) => give number between 0 and 1
                console.log(Math.floor((Math.random()*10)+1)); // give value between 1 and 9
                
                let min = 10
                let max = 20
                console.log(Math.floor(Math.random()*(max-min)+min))
                 
    
        

