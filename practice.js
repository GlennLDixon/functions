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

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]



const wordsfilter = () => {
    const newArray = []
    for (const word of words) {
        if(word.startsWith('k')) {
            newArray.push(word)
        }
    }
    return newArray;
}

const wordJoin = () => {
    const newWord = words.join(' ')
    return newWord;
}


console.log(wordsfilter())
console.log(wordJoin())
