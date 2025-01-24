let arr=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K']

function gen(){
    let y=" "
    for(let i=0;i<4;i++){
       
        y=y+arr[generate()]
    }
    document.querySelector('#otp').innerHTML=y
}

let generate=() =>{
    return Math.floor((Math.random()*arr.length))
    
}
