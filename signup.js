let sub =() => {
  localStorage.setItem('Name',document.getElementById('name').value)
  localStorage.setItem('password',document.getElementById('password').value)

  let pass=localStorage.getItem('password')
  
  if(pass==password){
    alert("user already exist..Login")
  }
}

