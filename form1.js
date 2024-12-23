function add(){

let a=parseInt(document.getElementById('num1').value) 
let b=parseInt(document.getElementById('num2').value)


// .value will take the value entered in the input box.
let d=a+b

let c=document.getElementById('head')
c.innerHTML=(d)
return false

// return false is used to stop form submission

}


