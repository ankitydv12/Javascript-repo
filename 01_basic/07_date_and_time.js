let mydate = new Date()
// it take time from 1970 

console.log(typeof mydate); //object 

console.log(mydate.toDateString()) //change the date into readabe foam --- Thu Mar 27 2025 . Return only  date
console.log(mydate.toLocaleString()) // 3/27/2025, 12:11:31 AM
 
// Creating dates 
console.log(new Date(2012,0,2).toLocaleString());
//Month start from YYYY,M,DD

console.log(new Date(2012,0,3,9,23).toLocaleString())
//YYYY,MM,DD,HH,MM

let cusdate = new  Date("2024-01-12")
/*
    *YYYY-MM-DDYYYY-MM-DD
        *
 */

    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth() + 1); // mothns are 0 Indexed 
    console.log(newDate.getDay());
    
    // `${newDate.getDay()} and the time `
    
    newDate.toLocaleString('default', {
        weekday: "long",
        
    }) //<mdn>