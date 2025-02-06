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


function sub(){
    let getdata={
        name : document.getElementById('name').value,
        age : document.getElementById('age').value,
        city : document.getElementById('city').value,
        contact : document.getElementById('contact').value
    }

    fetch('http://localhost:3000/student',{method : "POST",
                                           headers:{
                                               'Content-type': 'application/json'
                                           }, 
                                           body: JSON.stringify(getdata)}
         ).then(r=>alert("Data inserted successfully "))
}