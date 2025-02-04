async function getdata(){
    let data= await fetch('http://localhost:3000/student')
    let res = await data.json()
    console.log(res)
}

getdata()