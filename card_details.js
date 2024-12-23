function sub(){
    let cardnum=document.querySelector('#cardnum').value 
    let cardname=document.querySelector('#cardname').value
    let exp=document.querySelector('#exp').value
    let code=document.querySelector('#code').value


    if(cardnum==''){
        alert('Please Enter card number')
        document.getElementById('cardnum').focus()
        return false
    }

    else if(isNaN(cardnum)){
        alert("Sorry Numbers only")
        document.getElementById('cardnum').focus()
        return false
    }

    else if(cardnum.length>16||cardnum.length<16){
        alert("Card number Should be of 16 digits")
        document.getElementById('cardnum').focus()
        return false
    }

    else if(cardname==''){
        alert('Please Enter card name')
        document.getElementById('cardname').focus()
        return false
    }

    else if(exp==''){
        alert("Please Enter expiry date of your card")
        document.querySelector('#exp').focus()
        return false
    }
    
    else if(!(exp.includes('/'))){
        alert("Please Enter in as on the card")
        document.getElementById('exp').focus()
        return false
    }

    else if(code==''){
        alert("Please enter your security code")
        document.getElementById('code').focus()
        return false
    }

    else if(isNaN(code)){
        alert("sorry numbers only")
        document.querySelector('#code').focus()
        return false
    }

    else if(code.length>3 || code.length<3){
        alert("Please Enter the three Digit code")
        document.querySelector('#code').focus()
        return false
    }



}