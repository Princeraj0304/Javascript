// object in js is used to store data in key value pair.

let ob={
    name : "Prince",
    age : 20,
    address : "Bhopal",
    contact : 123
}

// console.log(ob.name,ob.age);

// console.log(ob)

for(let k in ob){
    console.log(k)
    
    console.log(ob[k])
}