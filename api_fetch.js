async function retrieve(){
    let data=await fetch('https://jsonplaceholder.typicode.com/comments')
    let finaldata=await data.json()
    let tdata=finaldata.map((e)=>`
    <tr> 
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.body}</td>
    </tr>`).join('')

    document.querySelector('#display').innerHTML=tdata

}

retrieve()
