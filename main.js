```javascript
/*
=========================================================
        JAVASCRIPT COMPLETE REVISION FILE
            By: Rumi Parvez
=========================================================

Topics:
1. Variables
2. Data Types
3. typeof
4. Operators
5. if / else
6. Ternary Operator
7. Loops
8. String Methods
9. Arrays
10. Objects
11. Functions
12. Scientific Numbers
13. Mini Practice
=========================================================
*/

console.log("========== 1. VARIABLES ==========");

let name = "Rumi";
const country = "Bangladesh";

console.log(name);
console.log(country);

name = "Parvez";

console.log(name);



console.log("\n========== 2. DATA TYPES ==========");

let fullName = "Rumi";
let age = 17;
let isStudent = true;
let money = null;
let city;

console.log(fullName);
console.log(age);
console.log(isStudent);
console.log(money);
console.log(city);



console.log("\n========== 3. TYPEOF ==========");

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof money);
console.log(typeof city);



console.log("\n========== 4. ARITHMETIC OPERATORS ==========");

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(10 ** 2);



console.log("\n========== 5. ASSIGNMENT OPERATORS ==========");

let x = 10;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);



console.log("\n========== 6. COMPARISON OPERATORS ==========");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);

console.log(10 == "10");
console.log(10 === "10");

console.log(10 != 5);
console.log(10 !== "10");



console.log("\n========== 7. LOGICAL OPERATORS ==========");

let studentAge = 20;
let student = true;

console.log(studentAge >= 18 && student);
console.log(studentAge >= 18 || false);
console.log(!student);



console.log("\n========== 8. IF ELSE ==========");

let personAge = 17;

if (personAge >= 18) {
    console.log("Adult");
} else {
    console.log("Child");
}



console.log("\n========== 9. ELSE IF ==========");

let marks = 82;

if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 70) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("A-");
}
else {
    console.log("Fail");
}



console.log("\n========== 10. TERNARY ==========");

let voteAge = 20;

voteAge >= 18
    ? console.log("Can Vote")
    : console.log("Cannot Vote");



console.log("\n========== 11. FOR LOOP ==========");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



console.log("\n========== 12. WHILE LOOP ==========");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



console.log("\n========== 13. DO WHILE ==========");

let j = 1;

do {
    console.log(j);
    j++;
}
while (j <= 5);



console.log("\n========== 14. BREAK ==========");

for (let k = 1; k <= 10; k++) {

    if (k == 6) {
        break;
    }

    console.log(k);

}



console.log("\n========== 15. CONTINUE ==========");

for (let k = 1; k <= 5; k++) {

    if (k == 3) {
        continue;
    }

    console.log(k);

}



console.log("\n========== 16. STRING ==========");

let text = " Hello JavaScript ";

console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 5));
console.log(text.includes("Java"));
console.log(text.startsWith(" "));
console.log(text.endsWith(" "));
console.log(text.split(" "));



console.log("\n========== 17. ARRAY ==========");

let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(fruits);

console.log(fruits[0]);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.includes("Apple"));

console.log(fruits.indexOf("Banana"));

console.log(fruits.length);

console.log(fruits.join("-"));

console.log(fruits.slice(1, 3));

console.log([...fruits].reverse());

console.log([...fruits].sort());



console.log("\nLoop Through Array");

for (let fruit of fruits) {
    console.log(fruit);
}



console.log("\n========== 18. OBJECT ==========");

const person = {

    name: "Rumi",
    age: 17,
    country: "Bangladesh"

};

console.log(person);

console.log(person.name);
console.log(person.age);

person.age = 18;

console.log(person);

delete person.country;

console.log(person);

console.log(Object.values(person));

console.log(Object.entries(person));

console.log("\nFor In");

for (let key in person) {

    console.log(key);

}

console.log("\nKeys & Values");

for (let [key, value] of Object.entries(person)) {

    console.log(key, value);

}



console.log("\n========== 19. FUNCTION ==========");

function greet() {

    console.log("Hello Rumi");

}

greet();



console.log("\n========== 20. FUNCTION PARAMETER ==========");

function welcome(userName) {

    console.log("Welcome", userName);

}

welcome("Rumi");



console.log("\n========== 21. RETURN ==========");

function add(a, b) {

    return a + b;

}

console.log(add(10, 20));



console.log("\n========== 22. FUNCTION + ARRAY ==========");

function showFruits(array) {

    console.log(array);

}

showFruits(fruits);



console.log("\n========== 23. FUNCTION + OBJECT ==========");

function showPerson(user) {

    console.log(user.name);
    console.log(user.age);

}

showPerson(person);



console.log("\n========== 24. SCIENTIFIC NUMBER ==========");

console.log(1e3);
console.log(1e6);
console.log(1e9);
console.log(1e12);
console.log(1e24);



console.log("\n========== 25. MINI PRACTICE ==========");

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let number of numbers) {

    sum += number;

}

console.log("Total =", sum);



console.log("\n========== 26. MINI OBJECT PROJECT ==========");

const mobile = {

    brand: "Samsung",
    model: "S24",
    price: 1000,
    color: "Black"

};

console.log(mobile);

if (mobile.price >= 1000) {

    console.log("Premium Phone");

}
else {

    console.log("Budget Phone");

}



console.log("\n========== 27. FUNCTION PROJECT ==========");

function calculateArea(length, width) {

    return length * width;

}

let area = calculateArea(20, 10);

console.log(area);



console.log("\n========== END OF JAVASCRIPT REVISION ==========");
```
