async function getdata(){
    let data= await fetch('http://localhost:3000/student')
    let res = await data.json()

let b=res.map((e)=>`
<tr>
<td>${e.id}</td> 
<td>${e.name}</td>
<td>${e.age}</td> 
<td>${e.city}</td> 
<td>${e.contact}</td> 
<td><button onclick="mydelete('${e.id}')">Delete</button></td>
</tr>
`).join('')

document.getElementById('table').innerHTML=b

}

getdata()

function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method : "DELETE"
    })
    .then(res=>alert("Message Deleted"))
}


