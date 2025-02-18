let count=0

let numadd=()=>{
    count++
    localStorage.setItem('count',count)
    document.getElementById('count').innerHTML=count
  
}

let numsub=()=>{
    if(count>0){
        count--
        document.getElementById('count').innerHTML=count
    }
}