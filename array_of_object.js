let friends=[
    {
        Name: "Prince",
        Age : 20,
        Location : "Bhopal"
    },

    {
        Name : "Priyansh",
        Age : 21,
        Location :"Bhopal"
    }

]

console.log(friends)

console.log(friends[1])

friends.push({
    Name: "Tanu",
    Age : 22,
    Location : "Delhi"
})

console.log(friends)

friends.pop()
console.log(friends);

friends.shift()
console.log(friends)

friends.unshift({
    Name: "Anurag",
    Age : 21,
    Location : "Bhopal"
})

console.log(friends)

friends.push({
    Name: "Rahil",
    Age : 20,
    Location : "Bhopal"
},
{
    Name: "Akshat",
    Age : 21,
    Location : "Kolkata"
},{
    Name: "Luffy",
    Age : 20,
    Location : "Grand Line"
})

console.log(friends)


let friendss=friends.slice(1,3)
console.log(friendss);


friends.splice(1,2,{
    Name : "Sanji",
    Age : 22,
    Location : "Grand Line"
})

console.log(friends)
