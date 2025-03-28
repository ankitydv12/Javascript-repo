const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// //This will add array as a element in array
// //  o/p: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] have total 4 index elemrnt array
// console.log(marvel_heros[3][2])//batman


const new_heros = marvel_heros.concat(dc_heros)
console.log(new_heros)
// return a new array

const new_heros2 = [...marvel_heros,...dc_heros]
console.log(new_heros2)
console.log(typeof new_heros2)


const another_array = [1,2,3,4,[2,3,4],[2,[2,[3,4]]]]
const flat_array = another_array.flat(Infinity)
//make flat array from nested array

console.log(Array.isArray(flat_array))
//check the given sequence is array or not 


console.log(Array.from("Ankit"))
//make a array from given sequence 

console.log(Array.from({name:"ankit"})) 
//this will give empty null value because we have specifiy the key or value to which make an array 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







