//comparing two different datatype (Bad Practice)
console.log("2">1); // 2 converted to number 

console.log(null>0) // false
console.log(null ==0) // false
console.log(null>=0) // true
/* 
   * this is because equality operation(==) handel null diffrently 
   * and comparisoion operator treat null as 0
   * Bad practice avoid this type of 
*/




