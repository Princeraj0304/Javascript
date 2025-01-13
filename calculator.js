let a=parseInt(prompt("Enter your first number "))
let b=parseInt(prompt("Enter your second number "))
let c=prompt("input your operator ")

switch(c){
    case '+':
        alert(a+b)
        break;
    case '-':
        alert(a-b)
        break;

    case '*':
        alert(a*b)
        break;

    case '/':
        alert(a/b)
        break;
    
    case '%':
        alert(a%b)
        break;
    
    default:
        alert("Invalid operator entered")
}
