function sub(){
    let name=document.getElementById('name').value
    let password=document.getElementById('password').value

    let pass=localStorage.getItem('password')

    if(password!=pass){
     alert("user not found..Signup first")
    }

    else{
        alert("Login successfully")
    }
}

