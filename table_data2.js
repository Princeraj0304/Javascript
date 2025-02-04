function showdata(){

let data=[{
        Name : 'Luffy',
        Goal : 'To be the King of the Pirates',
        Nickname : 'straw-hat'
    },
    {
        Name : 'Sanji',
        Goal : 'To find the all blue',
        Nickname : 'Black leg'
    },

     {
        Name : 'zoro',
        Goal : 'To be the best swordsman in the world',
        Nickname : 'Hell king'
     },
]

let getdata=data.map((e)=>`
   <tr>
   <td>${e.Name}</td>
   <td>${e.Goal}</td>
   <td>${e.Nickname}</td>
   </tr>
`).join('')

document.getElementById('table').innerHTML=getdata
}