// var harrison = {
//     "first_name": "Harrison",
//     "email": "harrisoneanthony@gmail.com",
// }

// // console.log(harrison["email"])
// // harrison["email"] = "new_email.com"
// // console.log(harrison["email"])
// harrison["last_name"] = "Anthony"
// // console.log(harrison)

// for (var key in harrison){
//     // console.log(key)
//     console.log(harrison[key])
// }

// create a function that takes in an object and a value and checks to see if 
// the value is one of the values within the object. Then return true or false

var fun_things = {
    "football_team": "Chargers",
    "book": "Harry Potter",
    "anime": "Attack on Titan",
    "character": "Luffy"
}

function searchVal(obj,val){
    for(var key in obj){
        if(obj[key] == val){
            return true
        }    
    }
    return false
}

// searchVal(fun_things, "Harry Potter")

var sports = ["football", "baseball", "soccer", "hockey"]

console.log(sports[Math.floor(Math.random() * sports.length)])

