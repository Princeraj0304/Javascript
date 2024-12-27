// Array is a collection of elemets with multiple data types.

// write  a program to take 10 integer inputs fromt the user and print and sum of all odd numbers in an array

// for of loop is used to print the elmeent of an Array.
// for in loop is used to print the indexing of an Array.

// let ar=[12,33,"Prince",4.5]

// for(let v of ar){
//     console.log(v)
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