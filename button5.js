let hello=false

function fun(){
    let h=document.getElementById('head')
    let btn=document.getElementById('btn')
    hello = !hello

    if(hello){
        h.innerHTML="cybrom"
        btn.innerHTML="Hide"

    }

    else{
        h.innerHTML=""
        btn.innerHTML='show'
    }
}