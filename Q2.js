let count=0

function add(){
    if(count<20){
    count=count+5
    document.getElementById('num').innerHTML=count
}

}

function sub(){
    if(count>0){
    count=count-1
}
    document.getElementById('num').innerHTML=count
}


