function change(){

    let a=document.getElementById('head')

    if(a.innerHTML=="cybrom"){
        a.innerHTML=" "
        document.getElementById('butt').innerHTML="show"
    }

    else{
        a.innerHTML="cybrom"
        document.getElementById('butt').innerHTML="Hide"
    }
}

