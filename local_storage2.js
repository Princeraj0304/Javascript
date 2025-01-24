let person_ob={
    name : "Prince",
    email : "priinceraj5403@gmail.com",
    password : 123
}

localStorage.setItem("userdata",JSON.stringify(person_ob))

let data=JSON.parse(localStorage.getItem('userdata'))
console.log(data)

console.log(data.name)