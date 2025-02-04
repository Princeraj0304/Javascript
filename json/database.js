async function getdata(){
    let data= await fetch('http://localhost:3000/student')
    let res = await data.json()

let b=a.map((e)=>`
<tr>
<td>${e.name}</td> 
<td>${e.age}</td> 
<td>${e.city}</td> 
<td>${e.contact}</td> 
</tr>
`).join('')

document.getElementById('table').innerHTML=b

}

getdata()


