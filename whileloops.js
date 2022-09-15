// var i = 0
// while(i < 5){
//     console.log("Hello")
//     i++
// }

// var obj = {}

// // create an array
// console.log(typeof(i))
// console.log(typeof(["got","you"]))
// console.log(typeof(obj))

var arr1 = ["Ninja",3,8,10,10]
var arr2 = [8,9,9,30,]

// given an array, return the sum of the first value in the array, 
// plus the array's length. what happns if the array's first value is not a number, 
// but a string (like "what?") or a boolean (like false)

function sumItUp(arr){
    var sum = 0
    if(typeof(arr[0]) == "string"){
        console.log("First value is not a number!!!!")
        return arr[0]
    }
    for (var num in arr){
        sum += arr[num]
    }
    return sum + arr.length
}

console.log(sumItUp(arr2))