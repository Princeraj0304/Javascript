let a=document.createElement('h1')
a.innerHTML="Myself Prince"

let bd=document.body
bd.append(a)

let b=document.createElement('h3')
b.innerHTML="This is head3"

let bd1=document.body
bd1.append(b)

// setAttribute allow us to pass attribute to the element
// setAttribute allow us to pass only one attribute, if we add more than one it will overwrite

a.setAttribute('style','background-color: red')
a.setAttribute('style','color:blue')
a.removeAttribute('style','color')


b.setAttribute('align','center')

bd.setAttribute('bgcolor','yellow')
bd.removeAttribute('bgcolor')