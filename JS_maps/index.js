const doc = document.getElementById("hello")

// creating a new map 1

const myMap = new Map()

// creating a new map 2

const myMap2 = new Map([
    ["key1", "value1"],
    [2, ["value2"]],
    [true, "value3"]
])

console.log(myMap2)

// adding elements to the map

myMap.set(0, "zero")
myMap.set("one", 1)
myMap.set([2, "two"], ["two", 2])
myMap.set(true, false)

console.log(myMap)

doc.innerHTML += "Displaying the map" + ("<br><br>") + Array.from(myMap).join("<br> ") + ("<br><br>")

// Displaying keys in the map

doc.innerHTML += "Displaying the map's keys with a for loop" + ("<br><br>")

for (let key of myMap.keys()) {
    doc.innerHTML += `Key is ${key}` + ("<br>")
}



// Displaying values in the map

doc.innerHTML += ("<br>") + "Displaying the map's values with a for loop" + ("<br><br>")

for (let value of myMap.values()) {
    doc.innerHTML += `Value is ${value}` + ("<br>")
}

// Displaying both keys and values

doc.innerHTML += ("<br>") + "Displaying the map's keys and values with a for loop" + ("<br><br>")

for (let [key, value] of myMap) {
    doc.innerHTML += `Key is ${key}, value is ${value}` + ("<br>")
}

// Running forEach on map

doc.innerHTML += ("<br>") + "Displaying the map's keys and values with a forEach" + ("<br><br>")

myMap.forEach((value, key) => doc.innerHTML += `Key: ${key}, value: ${value}` + ("<br>"))
