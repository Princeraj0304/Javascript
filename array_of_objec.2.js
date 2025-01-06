let student=[
    {   id:1,
        name :"Prince",
        age :20,
        city:"Bhopal"
    },
    {
        id:2,
        name :"Tanu",
        age :22,
        city:"Delhi" 
    },
    {
        id:3,
        name :"Priyansh",
        age :21,
        city:"Bhopal"
    }
]

let st=student.map((e)=>{return e.name})
console.log(st)

let st_filter =student.filter((e)=>{return e.age>20})
console.log(st_filter)