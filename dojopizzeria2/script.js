// function pizzaOven(name, crust, sauce, cheese, toppings){
//     var pizza = {};
//     pizza.name = name
//     pizza.crust = crust
//     pizza.sauce = sauce
//     pizza.cheese = cheese
//     pizza.toppings = toppings
//     return pizza
// }

// pizza1 = pizzaOven("deep dish","regular","alfredo","gouda",["sausage","peppers","sardines"])
// pizza2 = pizzaOven("Crusty Crab","sourdough","mustard","super moldy cheese",["skittles","carolina reefers","swedish fish"])
// pizza3 = pizzaOven("Deliciousness","cookie crust","melted marshmellows","shaved white chocolate",["gumballs","ice cream"])

// console.log(pizza1)

// var arr = [pizza1,pizza2,pizza3]

// function randomPizza(pizzaArr){
//     i = Math.floor(Math.random() * arr.length)
//     return pizzaArr[i]
// }

// console.log(randomPizza(arr))

var crust = ["regular","sourdough","cookies crust"]
var sauce = ["melted marshmellow","alfredo", "mustard"]
var cheese = ["Gouda","super moldy cheese","shaved white chocolate"]
var toppings = ["french fries", "gumballs", "ice cream","skittles","carolina reefers","swedish fish","sausage","peppers","sardines"]

function randomPizza(crust, sauce, cheese, toppings){
    var pizza = {};
    pizza.crust = crust[Math.floor(Math.random() * crust.length)]
    pizza.sauce = sauce[Math.floor(Math.random() * sauce.length)]
    pizza.cheese = cheese[Math.floor(Math.random() * cheese.length)]
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)]
    return pizza
}

console.log(randomPizza(crust, sauce, cheese, toppings))