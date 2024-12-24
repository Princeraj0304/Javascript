function sub(){
    let name=document.getElementById('name').value
    let contact=document.getElementById('contact').value
    let age=document.getElementById('age').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let cpassword=document.getElementById('cpassword').value

    if(name==''){
        alert("Name cannot be empty")
        document.getElementById('name').focus()
        return false
    }

    else if(age==''){
        alert("age cannot be empty")
        document.getElementById('age').focus()
        return false
    }

    else if(isNaN(age)){
        alert("Numbers only")
        document.getElementById('age').focus()
        return false
    }

    else if(contact==''){
        alert("contact cannot be empty")
        document.getElementById('contact').focus()
        return false
    }

    else if(isNaN(contact)){
        alert("Numbers only")
        document.getElementById('contact').focus()
        return false
    }

    else if(contact.length>10 || contact.length<10){
         alert("Contact should be upto 10 digit")
         document.getElementById('contact').focus()
         return false
    }

    
    else if(email==''){
        alert("E-mail cannot be empty")
        document.getElementById('email').focus()
        return false
    }

    else if(!(email.includes('@'))){
        alert("Invalid Email")
        document.getElementById('email').focus()
        return false
    }

    else if(password==''){
        alert("Enter your password")
        document.getElementById('password').focus()
        return false
    }

    else if(!(password.match(/[~!@#$%^&*<>]/))){
        alert("please enter atleast one special character")
        document.getElementById('password').focus()
        return false
    }

    else if(cpassword==''){
        alert("Enter your password again")
        document.getElementById('cpassword').focus()
        return false
    }

    else if(password!=cpassword){
        alert("Password mis matched")
        document.getElementById('cpassword').focus()
        return false
    }


}