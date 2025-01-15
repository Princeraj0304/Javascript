let x=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color=document.getElementById('color')
// const change=() =>{
//    
// }

setInterval(
function change(){
    let y= '#'
    for(let i=0;i<6;i++){
        y=y+x[random_gen()]
    }
    document.body.style.backgroundColor=y
}
,100)

const random_gen=()=>{
     return Math.floor((Math.random() * x.length))
}