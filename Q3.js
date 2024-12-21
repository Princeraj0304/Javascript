function sub(){
    let a=document.getElementById('namee').value
    let b=document.getElementById('contactt').value
    let c=document.getElementById('Emaill').value
    if(a==''){
        alert('Name cannot be empty')
        document.getElementById('namee').focus()
        return false
    }

    else if(b==''){
        alert('contact cannot be empty')
        document.getElementById('contactt').focus()
        return false
    }

    else if(c==''){
        alert('Email-cannot be empty')
        document.getElementById('Emaill').focus()
        return false
    }


}