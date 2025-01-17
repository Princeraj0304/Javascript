let x=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color=document.getElementById('color')
// const change=() =>{
//    
// }

let z=setInterval(
function change(){
    let y= '#'
    for(let i=0;i<6;i++){
        y=y+x[random_gen()]
    }
    document.body.style.backgroundColor=y
}
,100)

setTimeout(z,5000)

clearInterval()
const random_gen=()=>{
     return Math.floor((Math.random() * x.length))
}

// object array spread-operator ternary-operator exception-handling local-storage Array-to-string String-to-array
// Array-methods