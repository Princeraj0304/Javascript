// Array is a collection of elemets with multiple data types.

// write  a program to take 10 integer inputs from the user and print and sum of all odd numbers in an array

// for of loop is used to print the elements of an Array.
// for in loop is used to print the indexing of an Array.



//  let ar=[12,33,"Prince",4.5,887]

// for(let v of ar){
//     console.log(v)
// }

// let b="prince"

// for(let f of b){
//   console.log(f)
// }

let ar=[]

for(let i=0;i<10;i++){
  ar[i] = parseInt( prompt("Enter the element"))
}

let sum=0

for(let v of ar){
    if(v%2!=0){
        sum=sum+v
    }
}
console.log(sum)