// includes()

const l = console.log

const sentence = "Piotr is the newest employee of the EBE company.";

const ebe = "ebe";

const employee = "Piotr"

l(sentence.includes(ebe) ? "yes" : "no")
l(sentence.includes(employee) ? "yes" : "no")


const array3 = [0, 1, 2, 3, 4]

l(array3.includes(2) ? "I do" : "No, sorry")


// some()

const array = [0, 1, 2, 3, 4]

const array2 = [0, 1, 2]

const number = (x) => x / 2 === 2;

l(array.some(number));
l(array2.some(number));


// filter()

const employees = ["Ibrahim", "Ciaran", "Allyson", "CJ", "Jack", "Hannah"];

const longNames = employees.filter(x => x.length > 5);

l(longNames);


// reduce()

const numbers = [0, 1, 2, 3, 4, 5, 6];

const reducedNumbers = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

l(reducedNumbers);

// match()

l(sentence.match("iotr is")) //returns an array, "iotr is" exists
l(sentence.match("piotr")) //reurns null, piotr doesn't exist in the string
l(sentence.match(/[A-Z]/g)) //returns all capital leters: 'P', 'E', 'B', 'E'