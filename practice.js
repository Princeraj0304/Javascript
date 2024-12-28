let c=document.createElement('h1')

document.body.append(c)
c.setAttribute('id','head')
c.style.cssText="color:red; font-family: 'Bungee Spice';"

let a=document.createElement('button')
a.innerHTML="click"
a.style.cssText="color:white; padding-left:30px;padding-right:30px;padding-top:10px;padding-bottom:10px;font-size:20px;background-color:red;border:none;border-radius:5px"

document.body.append(a)

a.setAttribute('id','butt')

let b=document.querySelector('#butt')
b.addEventListener('click', function fun(){
    if(c.innerHTML=="prince"){
        c.innerHTML=" "
    }
    else{
        c.innerHTML="prince"
    }
})


