let student=[{
    Roll : 1,
    Name : "Prince",
    Age : 20,
    city : "Bhopal"
},
{   Roll : 2,
    Name : "Priyansh",
    Age : 21,
    city : "Bhopal"  
},

{   Roll : 3,
    Name : "Rahil",
    Age : 21,
    city : "Jamalpur"  
}

]

let finaldata =student.map((e)=>
` <tr>
  <td>${e.Roll}</td>
  <td>${e.Name}</td>
  <td>${e.Age}</td>
  <td>${e.city}</td>
</tr> `
 ).join("")

document.getElementById('displaydata').innerHTML=finaldata