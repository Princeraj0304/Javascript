let a=parseInt(prompt("Enter your age "))
if(a>=18){
    let n=parseInt(prompt("Enter 1 for Indian "))
    if(n==1){
        let g=prompt("Enter your gender ")
    
        if(g=="male"){
            alert("you are eligible ")
        }
        else{
            alert("you are not eligible")
        }
    }
    
    else{
        alert("you are not eligible ")
    }

}

else{
    alert("You are a child ")
}