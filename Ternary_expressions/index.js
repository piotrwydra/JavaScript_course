function isEmployee(name) {
    const employees = ["Alex", "Ciaran", "Ibrahim", "Hannah", "Matt", "Lindsay", "C.J.", "Jamie", "John", "Rob", "Allyson", "Jack", "Stuart"];
    return (employees.includes(name) ? `${name} is an employee` : `${name} is not an employee`);
};

let name = "Ciaran";

console.log(isEmployee(name));

whatIsYourNumber = (number) => number === 1 ? "Your number is 1" : number === 2 ? "Your number is 2" : number === 3 ? "Your number is 3" : "Your number is not 1, 2 or 3";

const number = 5;

console.log(whatIsYourNumber(number));