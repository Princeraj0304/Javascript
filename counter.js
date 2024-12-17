let count=0

function add(){
    count++
    document.getElementById('num').innerHTML=count
}

function sub(){
    if(count>0){
    count--
}
    document.getElementById('num').innerHTML=count
}


