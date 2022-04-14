const doc = document.getElementById("hello")
// creating an array with animals names

const animals = ["dog", "cat", "pig", "dog", "duck", "fish", "dog", "monkey", "cat", "elephant", "dog"]

//displaying the array

console.log("I've seen these animals in order: " + animals)

// making a set out of the animal array

const animalsSet = new Set(animals)

//displaying the set (no duplicates)

console.log("I now know new animals: ")
console.log(animalsSet)

doc.innerHTML += "Array with animals: " + animals + '<br><br>'
doc.innerHTML += "A set of animals I now know: " + Array.from(animalsSet).join(', ')

console.log(animalsSet.has("dog"))
console.log(animalsSet.has("tiger"))
console.log(animalsSet.has("cat"))

console.log(animals.length)
console.log(animalsSet.size)
