let sub = ()=>{
    let userdata ={
        Name : document.getElementById('name').value,
        Age : document.getElementById('age').value,
        Password : document.getElementById('password').value

    }

    localStorage.setItem("userinfo", JSON.stringify(userdata))

    let a=localStorage.getItem('userinfo')
    let b=JSON.parse(a)
    console.log(b);
    
    let c=Object.values(b)

    let d=c.map((e)=>{return e})
    console.log(d);

    for(k of d){
        console.log(k);
        
    }

    
  let e=Object.keys(b)

  let f=e.map((e)=>{return e})
  console.log(f);

  for(k of e){
    console.log(k);
    
  }
  

    return false
}