// fetch() returns promise 
// feth function runs get bydefault
// feth accepts two argument url and method in the form of object

//http request

// method ->  get,post,delete, post

// promise

//  reject  , pending , fulfill

// async and await are keywords that handle promise
// async and await works side by side

async function fetdata(){
    let data= await fetch('https://jsonplaceholder.typicode.com/posts')
    let res = await data.json()
    console.log(res)
}

fetdata()