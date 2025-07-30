console.log("Hello World");
//alert("yo");
let name = "yoyo";
console.log(name);
const number = 1
console.log(number)
typeof number
let fname=undefined;
let person = {
    pname: "Alex",
    age: 21,
    isAdult: true
}
//Dot Notation // Default choice
person.pname = "Alexzander";
//Bracker Notation
person['pname'] = "Alexander";
let select = 'pname'
person[select] = "Alex";
console.log(person)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[1]);

    function greet(name, lname) {
        console.log('Hello ' + name + ' ' + lname);
    }
    greet('Alex', 'Smith');
    greet('Jane', 'Doe');

    function square(number) {
        return number * number;
    }
console.log(square(2));