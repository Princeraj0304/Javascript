let a=parseInt(prompt("Enter first number "))
let b=parseInt(prompt("Enter second number "))

function Add(){
    let c=a+b
    document.getElementById('res1').innerHTML=c
   }


function Sub(){
    let c=a-b
    document.getElementById('res2').innerHTML=c
}

function Mul(){
    let c=a*b
    document.getElementById('res3').innerHTML=c
}

function Div(){
    let c=a/b
    document.getElementById('res4').innerHTML=c
}

function Mod(){
    let c=a%b
    document.getElementById('res5').innerHTML=c
}


