function fun()
{
let a=document.getElementById('name').value
let b=document.getElementById('contact').value

if(a==""){
    alert("Name cannot be empty")
    document.getElementById('#name').focus()
    return false
}
 if(b==""){
      alert("Please enter your contact number")
      document.getElementById('contact').focus()
      return false
}

}


