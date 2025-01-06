function sub(){
let obj={
    Name : document.querySelector('#name').vlaue,
    age :  document.querySelector('#age').value,
    game : document.querySelector('#game').value,
    Agent : document.querySelector('#agent').value,
    Active :document.querySelector('#active').value
}

// console.log(obj)



let value=Object.values(obj)  //object.value() function converts the object into an array whose values can be accessed with for of loop.
console.log(value)


for(k of value){
    console.log(k)
}

for(k in value){
    console.log(k)
}
return false



}

