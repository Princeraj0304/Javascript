function sub(){
    let cardnum=document.querySelector('#cardnum').value 
    let cardname=document.querySelector('#cardname').value
    let exp=document.querySelector('#exp').value
    let code=document.querySelector('#code').value


    if(cardnum==''){
        document.querySelector('.para').innerHTML='Please enter your card details'
        document.getElementById('cardnum').focus()
        return false
    }

    else if(isNaN(cardnum)){
        document.querySelector('.para').innerHTML='Please enter numbers only'
        document.getElementById('cardnum').focus()
        return false
    }

    else if(cardnum.length>16||cardnum.length<16){
        document.querySelector('.para').innerHTML='card number should contain 16 digits'
        document.getElementById('cardnum').focus()
        return false
    }

    else if(cardname==''){
        document.querySelector('.para2').innerHTML='Please enter name on your card'
        document.getElementById('cardname').focus()
        return false
    }

    else if(exp==''){
         document.querySelector('.para3').innerHTML='Please enter expiray date on card'
        document.querySelector('#exp').focus()
        return false
    }
    
    else if(!(exp.includes('/'))){
         document.querySelector('.para3').innerHTML='enter date same as on the card'
        document.getElementById('exp').focus()
        return false
    }

    else if(code==''){
         document.querySelector('.para4').innerHTML='Please enter the CVV'
        document.getElementById('code').focus()
        return false
    }

    else if(isNaN(code)){
        document.querySelector('.para4').innerHTML='sorry numbers only'
        document.querySelector('#code').focus()
        return false
    }

    else if(code.length>3 || code.length<3){
       document.querySelector('.para4').innerHTML='CVV should be of 3 digits'
       document.querySelector('#code').focus()
       return false
    }



}