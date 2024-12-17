function add(){
    let h=document.getElementById('head1')
    h.classList.add('head')
}

function remove(){
    let h=document.getElementById('head1')
    h.classList.remove('head')
}

function toggle(){
    let h=document.getElementById('head1')
    h.classList.toggle('head')
}

function theme(){
    let h=document.body
    h.classList.toggle('theme')
}