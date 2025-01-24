let sub = ()=>{
    let userdata ={
        Name : document.getElementById('name').vlaue,
        Age : document.getElementById('age').vlaue,
        Password : document.getElementById('password').value

    }

    localStorage.setItem("userdata", JSON.stringify(userdata))
}