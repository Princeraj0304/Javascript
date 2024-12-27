

let a

function start(){
    let num=0
a= setInterval( () => {num++
                    document.getElementById('head').innerHTML=num },1000)       
}

function stop(){
    clearInterval(a)
} 