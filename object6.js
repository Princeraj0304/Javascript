// let obj1={
//     name : "Prince",
//     age : 20
// }

// let obj2={
//     home : "JMP"
// }

// let obj3={...obj1,...obj2}

// console.log(obj3)

let obj2={
    name : "Prince",
    age : 20,
    address : "JMP",
    stack : "FSD"

}


let value=Object.values(obj2)
console.log(value);
// console.log(value[1])
for(k of value){
    console.log(k)
}


let key =Object.keys(obj2)
console.log(key)

console.log(key[1])


// delete function in object

delete obj2.age
console.log(obj2)


