let sub = ()=>{
    let userdata ={
        Name : document.getElementById('name').value,
        Age : document.getElementById('age').value,
        Password : document.getElementById('password').value

    }

    localStorage.setItem("userdata", JSON.stringify(userdata))
}