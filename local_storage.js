// local Storage predefined functions

// setItem()
// getItem()
// removeItem()
// clear()

// Data saved in local storage is saved in key value pair

localStorage.setItem('Name','Prince')
let a=20
localStorage.setItem('age',a)
localStorage.setItem('Address','Bhopal')
localStorage.setItem('S_name','Raj')
localStorage.setItem('color','Red')

let b=localStorage.getItem('color')


localStorage.removeItem('color')
localStorage.removeItem('S_name')

localStorage.clear()

document.write("<h1>" + b + "</h1>")


// JSON.stringify converts anything into string.