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
<td><button onclick="myedit('${e.id}')">Edit</button><td>
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


async function myedit(id) {
    let data=await fetch(`http://localhost:3000/student/${id}`)
    let resdata=await data.json()

    let frm=`
    <input type="text" name="" id="id1" value="${resdata.id}" readonly><br><br>
    <input type="text" name="" id="name1" value="${resdata.name}"><br><br>
    <input type="text" name="" id="age1" value="${resdata.age}"><br><br>
    <input type="text" name="" id="city1" value="${resdata.city}"><br><br>
    <input type="text" name="" id="contact1" value="${resdata.contact}"><br><br>
    <input type="submit" name="" id="" value="updated" onclick="finalupadate('${resdata.id}')">

    `

    document.getElementById('form').innerHTML=frm
}

function finalupadate(id){
    let frmdata={
        id : document.getElementById('id1').value,
        name : document.getElementById('name1').value,
        age : document.getElementById('age1').value,
        city : document.getElementById('city1').value,
        contact : document.getElementById('contact1').value
    }

    fetch(`http://localhost:3000/student/${id}`,{
        method : "PUT", headers:{
             'content-type':'application/json'
        },
        body: JSON.stringify(frmdata)}
        ).then(r=>alert("data updated successful"))
}