let a=parseInt(prompt("Enter your number "))

let count=0

for(let i=1;i<=a; i++){
    if(a%i==0){
        count++
    }
}

if(count==2){
    alert("The number is prime")
}

else{
    alert("The number is not prime")
}