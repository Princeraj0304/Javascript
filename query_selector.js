let h1=document.querySelector('#head1')
h1.style.color="blue"

let h2=document.querySelector('.head2')
h2.style.color="red"

let h3=document.querySelectorAll('.head2')
h3[0].style.color="green"
h3[1].style.color="navy"

let h4=document.querySelector('h2')
h4.style.color="purple"

let h5=document.querySelectorAll('h2')
h5[0].style.color="red"
h5[1].style.color="gray"
h5[2].style.color="tomato"


// In getElementsByClassname indexing is required for even a single element

// But in querySelector we don't require indexing for single element

// querySelectorAll returns a array just like getElementsByClassName
