let person_ob={
    name : "Prince",
    email : "priinceraj5403@gmail.com",
    password : 123
}

localStorage.setItem("userdata",JSON.stringify(person_ob))

let data=(localStorage.getItem('userdata'))
let sdata=JSON.parse(data)
console.log(sdata)

console.log(sdata.name)

localStorage.removeItem('userdata')