const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) 
                .map( (num) => num + 1) // in this 10 is pass because in chaining values is pass that is return by above method
                .filter( (num) => num >= 40)

console.log(newNums);