let a=parseInt(prompt("Enter your number "))

if(a%2==0){
    console.log("The number is even ");

    let i=1
    while(i<=10){
        console.log(a + "*" + i +"="+ a*i)
        i++
    }
    
  
}

else{
    console.log("The number is odd")
    
    let i=10
    while(i>=1){
        console.log(a +"*" + i +"="+ a*i)
        i--
    }
}