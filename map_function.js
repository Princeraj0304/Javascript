// Map function in js is used to fetch the elements of an array and return it in a new array.
// Map function accepts a call back function.
// Map function doesn't allow conditions



let ar=[1,2,3,4,5,6]

let arr=ar.map((t)=>{return t})

console.log(arr)

// Filter function returns a new array based on a specific condition

let nrr=ar.filter((t)=>{return t%2==0})
console.log(nrr)