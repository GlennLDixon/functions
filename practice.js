// const calculateAgeInDogYear = (age) => {
//     const ageInDogYears = age / 7
    
//     return ageInDogYears
// }

// console.log(calculateAgeInDogYear(22))

// const dogBreed = (breed) => {

//     // return `My favorite dog breed is ${breed}`
//     if (breed === "meow") {
//         console.log("I like cats")
//     }
// }

// console.log(dogBreed("weow"))

// const myFavorite = dogBreed("meow")

// console.log(`When it come to pets ${myFavorite}`)

// if (dogBreed(breed) === "meow") {
//     console.log("I like cats")
// }

// const add = (num2,num1, num3) => {
//     const total = num1 + num2 + num3
//     return total
// }

// console.log(add(17, 4, 11))

// const evenOrOdd = (num) => {
//     if (num % 2 === 0) {
//         console.log(`${num} is even`)
//     } else {
//         console.log(`${num} is odd`)
//     }
// }

// evenOrOdd(3)

// const go = (direction, speed) => {
//     console.log(`The car is moving ${direction} at ${speed}mph`)
//     console.log(`The car is moving ${direction} at ${speed}mph`)
//     console.log(`The car is moving ${direction} at ${speed}mph`)
    
//     if(speed > 75) {
//         console.log(`The car is moving ${direction} at ${speed}mph. SLOW DOWN`)
//     }
// }

// go('forward', 45)
// go('backwards', 8)
// go('circles', 12)
// go('forward', 82)

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]



// const wordsfilter = () => {
//     const newArray = []
//     for (const word of words) {
//         if(word.startsWith('k')) {
//             newArray.push(word)
//         }
//     }
//     return newArray;
// }

// const wordJoin = () => {
//     const newWord = words.join(' ')
//     return newWord;
// }


// console.log(wordsfilter())
// console.log(wordJoin())

// const headOrTail = () => {
//     const coin = Math.floor(Math.random() * 2)

//     if (coin === 1 ) {
//         console.log('Sven hooked a tuna! :)')
//     } else {
//         console.log('Sven came up empty-handed. :(')
//     }
// }

// headOrTail()

// const orderMeal = (sandwich, side, drink, dessert) => {
//     return {
//         "sandwich": sandwich,
//         "side": side,
//         "drink": drink,
//         "dessert": dessert
//     }
// }

// const takeout = orderMeal("chick-fil-a", "waffle fries", "large lemonade", "pie")
// console.log(takeout)

// const twice = number => number * 2
// const timesFive = number => number * 5
// const square = number => number * number

// const bigify = (number, operationFunction) => {
//     const result = operationFunction(number)
//     return result
// }

// const number = 7
// const by2 = bigify(number, twice)
// const by5 = bigify(number, timesFive)
// const byItself = bigify(number, square)

// console.log(by2)
// console.log(by5)
// console.log(byItself)


// Functions that are holding the chores down
const mondayChores = obj1 => {
    return `${obj1.firstName} ${obj1.lastName} mowed the grass`
    
}

const tuesdayChores = obj2 => {
    return `${obj2.firstName} ${obj2.lastName} swept the floor`
    
}

const wednesdayChores = obj3 => {
    return `${obj3.firstName} ${obj3.lastName} clean the pool`
}

const thursdayChores = obj4 => {
    return `${obj4.firstName} ${obj4.lastName} wash the car`
}

const fridayChores = obj5 => {
    return `${obj5.firstName} ${obj5.lastName} painted the walls`
}

const saturdayChores = obj6 => {
    return `${obj6.firstName} ${obj6.lastName} painted the walls`
}

// 
const currentDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const dayPlanner = (chore1, chore2, chore3, person, day) => {
    const plan = `On ${day} ${chore1(person)}, next ${chore2(person)}, last thing on the list ${chore3(person)}`
    return plan
}

const myDay = dayPlanner(tuesdayChores, wednesdayChores, mondayChores, {firstName: "Glenn", lastName: "Dixon"}, currentDay[1])
console.log(myDay)