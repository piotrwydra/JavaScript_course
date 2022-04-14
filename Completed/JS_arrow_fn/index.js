const doc = document.getElementById("hello")

function myFunction() {
    doc.innerHTML = "I was created by using a function"
}

function eraseMe() {
    doc.innerHTML = " ";
}

myFunction2 = () => doc.innerHTML = "I was created by using an arrow function"