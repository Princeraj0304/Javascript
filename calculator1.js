function Add(){
    let a= parseInt(document.getElementById('num1').value)
    let b= parseInt(document.getElementById('num2').value)
    if (isNaN(a)) {
        alert("Please enter valid numbers in both fields");
        document.getElementById('num1').focus()
        return false;
    }
    else if(isNaN(b)){
        alert("Please enter valid numbers in both fields");
        document.getElementById('num2').focus()
        return false;
    }

    let c=a+b
    document.getElementById('res').innerHTML=c
    return false
}

function Sub(){
    let a= parseInt(document.getElementById('num1').value)
    let b= parseInt(document.getElementById('num2').value)

    if (isNaN(a)) {
        alert("Please enter valid numbers in both fields");
        document.getElementById('num1').focus()
        return false;
    }
    else if(isNaN(b)){
        alert("Please enter valid numbers in both fields");
        document.getElementById('num2').focus()
        return false;
    }

    let c=a-b
    document.getElementById('res').innerHTML=c
    return false
}

function Div(){
    let a= parseInt(document.getElementById('num1').value)
    let b= parseInt(document.getElementById('num2').value)

    if (isNaN(a)) {
        alert("Please enter valid numbers in both fields");
        document.getElementById('num1').focus()
        return false;
    }
    else if(isNaN(b)){
        alert("Please enter valid numbers in both fields");
        document.getElementById('num2').focus()
        return false;
    }

    let c=a/b
    document.getElementById('res').innerHTML=c
    return false
}

function Mod(){
    let a= parseInt(document.getElementById('num1').value)
    let b= parseInt(document.getElementById('num2').value)

    if (isNaN(a)) {
        alert("Please enter valid numbers in both fields");
        document.getElementById('num1').focus()
        return false;
    }
    else if(isNaN(b)){
        alert("Please enter valid numbers in both fields");
        document.getElementById('num2').focus()
        return false;
    }

    let c=a%b
    document.getElementById('res').innerHTML=c
    return false
}

function Mul(){
    let a= parseInt(document.getElementById('num1').value)
    let b= parseInt(document.getElementById('num2').value)

    if (isNaN(a)) {
        alert("Please enter valid numbers in both fields");
        document.getElementById('num1').focus()
        return false;
    }
    else if(isNaN(b)){
        alert("Please enter valid numbers in both fields");
        document.getElementById('num2').focus()
        return false;
    }

    let c=a*b
    document.getElementById('res').innerHTML=c
    return false
}

let d=document.querySelector('form')
d.style.cssText=';color:#185519'

let e=document.getElementById('box')
e.style.cssText='background-color:#FFF0DC;color:white;display:flex;justify-content:center;border:1px solid #EB5B00 ;width:25%;padding-top:60px;padding-botton:60px; margin-left:550px; margin-top:200px'

let f=document.getElementById('text')
f.style.cssText='font-family:sans-serif;font-size:20px;padding:10px;'

let g=document.querySelectorAll('button')
g[0].style.cssText='background-color: 4C585B ;color:#4A4947;border:none;padding:3px;'
g[1].style.cssText='background-color: 4C585B ;color:#4A4947;border:none;padding:3px'
g[2].style.cssText='background-color: 4C585B ;color:#4A4947;border:none;padding:3px'
g[3].style.cssText='background-color: 4C585B ;color:#4A4947;border:none;padding:3px'
g[4].style.cssText='background-color: 4C585B ;color:#4A4947;border:none;padding:3px'

let h=document.getElementById('res')
h.style.cssText='color:#E07B39'