let num=parseInt(prompt("Enter your number"))

if(num%2==0){
    c=3.14*num*num
    console.log("The area of the circle with radius" ,num ,"is =", c)
}

else{
    console.log("The cube of the number", num , " is " , num*num*num)
}