/*
*************************************Datatype***********************

     JS datatype divide on the basic of how data is in memory and how it is access
     Primitive:(Allocation in Stak)
        Numeric
        String
        Boolean
        null 
        notdefine 
        symbols
        Bigint
     Reference(Non Primitive) Allocation in Heap
        Arrays
        Object
        function

*/

// Symbols => unique 
    let id = Symbol("123") //this return an unique
    let anotherid = Symbol("123")
    console.log(id==anotherid);

// Bigint
    let bigNumber = 32323434748572938792n

//************Non Primitive**************************

    //Arrays
    const todolist = ["eat","sleep","drink","learn"]


    //Objects
        // * object are define in {} braces 
    let admin = {
        name:"Ankit",
        age : 22,
    }


//************************************fuction******************
    // creating function as variable

    const myFunction = function(){
        console.log("The is variable type function");
    }
    console.log(typeof todolist);
    