let st
let num=0

function start(){
    let head=document.querySelector('#head')
   
    st=setInterval(() => {head.innerHTML=num++},1000)
}


function stop(){
    clearInterval(st)
}

setTimeout(stop,30000)
