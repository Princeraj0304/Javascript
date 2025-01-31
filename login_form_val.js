function auth(){
    let signup={
        name : document.querySelector('#name').value,
        email :  document.querySelector('#email').value, 
        password:  document.querySelector('#pass').value
    }

    localStorage.setItem('userdata',JSON.stringify(signup))

}

let data=JSON.parse(localStorage.getItem('userdata'))

function loginauth(){
    let logindata={

        email :  document.querySelector('#loginemail').value, 
        password:  document.querySelector('#loginpass').value
    }
    
    if(data.emial != logindata.email || data.password !=logindata.password){
        alert('user not found ')
        return false
    }
}