// very convenient shortcut to use console.log()

let log = console.log;

// declaring a characters array with the employee names

let characters = ['Ibrahim', 'Rob', 'CJ', 'Hannah', 'Stuart', 'Jack'];

// generator - function looping through the elements in the characters array

function* generator() {
    for (let y of characters) {

        // Each loop will display value: name from the characters array, done: false (because it hasn't reached the end of the array)

        yield y;
    }
    // This will return "value: "No more characters!", done: true (because there is no more elements to iterate through)

    return ("No more characters!")
}

// iter variable assigned to the result of the generator function

let iter = generator();

// an arrow function that console.logs the iter element 

const consoleLog = () => log(iter.next());

// a for loop that runs the arrow function 7 times (the array length + 1 to display the "No more characters") to loop through all characters

for (let x = 0; x < characters.length + 1; x++) {

    // calling an arrow function

    consoleLog();
}

//creating a new object

let newEmployee = {
    title: 'Frontend Dev',
    name: 'Piotr Wydra',
    age: 24,
    nationality: 'Polish',
    favourite_movies: ['Predestination', 'Airplane!', 'Pineapple Express'],
    joining_date: new Date(2022, 3, 6, 9, 0, 0, 0)
}


/* just some dummy data

let fakeEmployee = {
    title: 'Janitor',
    name: 'John Doe',
    age: 43,
    nationality: 'Mexican',
    favourite_movies: ['Forest Gump', 'Planet of Apes'],
    joining_date: new Date(2014, 6, 12, 15, 0, 0, 0)
}
*/

// adding a variable that will help us iterate through the object
let count = -1;

// an object with a Symbol.iterator property that will let us iterate throught the object properties

let employee = {
    [Symbol.iterator]: function (emp) {
        return {
            next: () => {
                count++;
                switch (count) {
                    case 0:
                        return {
                            value: emp.title,
                            done: false
                        }
                    case 1:
                        return {
                            value: emp.name,
                            done: false
                        }
                    case 2:
                        return {
                            value: emp.age,
                            done: false
                        }
                    case 3:
                        return {
                            value: emp.nationality,
                            done: false
                        }
                    case 4:
                        return {
                            value: emp.favourite_movies,
                            done: false
                        }
                    case 5:
                        return {
                            value: emp.joining_date,
                            done: false
                        }
                    case 6:
                        return {
                            value: undefined,
                            done: true
                        }
                    default:
                        return {
                            value: undefined,
                            done: true
                        }
                }
            }
        }
    }
}

let data = employee[Symbol.iterator](newEmployee);

for (i = 0; i < 7; i++) {
    log(data.next())
}

// iterating through the string

for (let char of "elements") {
    console.log(char)
}