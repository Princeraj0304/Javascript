let count=0

function add(){
    count=count+5
    document.getElementById('num').innerHTML=count
}

function sub(){
    if(count>0){
    count--
}
    document.getElementById('num').innerHTML=count
}


