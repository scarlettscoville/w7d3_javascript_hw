//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(obj){
    for (const [key, value] of Object.entries(obj)){
        if (Array.isArray(value)){
            for (const [key1, value1] of Object.entries(value)){
                if (typeof value1 === 'object'){
                    favoriteFoods(value1)
                    
                }else{
                    console.log(`This person's favorite ${key} is ${value1.toLowerCase()}.`)
                }  
            }
        }else{
            console.log(`This person's favorite ${key} is ${value.toLowerCase()}.`)
        }
        }
    }

    favoriteFoods(person3)




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name1, age){
        this.name1 = name1;
        this.age = age;
    }

// Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.name1} is ${this.age} years old.`;
    }
    
// Create another arrow function for the addAge method that takes a single parameter

    addToAge = (amt) => 
        this.age += amt;

}


let cole = new Person('Cole', 12);
let bennett = new Person('Bennett', 9);

console.log(cole.printInfo());
console.table(cole)
console.log(bennett.printInfo());
console.table(bennett)

// Adding to the age 
console.log(cole.addToAge(1))
console.log(bennett.addToAge(3))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function promise(string){
    return new Promise((resolve,reject)=>{
        if (string.length > 10){
        resolve("Big word")
        } else if (string.length < 10) {
        resolve("Small Number")
        } else {
            reject
        }
    
    }
    )}

console.log(promise('This is a string greater than 10.'))
console.log(promise('less'))