let a=document.createElement('button')
a.innerHTML='Click'


a.setAttribute('id','button')
bd.append(a)
let bd=document.querySelector('.image')
a.addEventListener('click',()=>{

    let b = `<img src="AIEstore-1.jpeg" width="100px">`;
    document.body.insertAdjacentHTML('afterend',b)
    b.style.display='none'
    
})

document.body.append(a)