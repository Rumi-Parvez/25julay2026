// ======================================================
// JavaScript Complete Revision
// Author: Rumi Parvez
// ======================================================

// ==========================
// 1. Variables
// ==========================

console.log("\n========== VARIABLES ==========");

let userName = "Rumi";
const country = "Bangladesh";

console.log(userName);
console.log(country);

userName = "Parvez";
console.log(userName);

// ==========================
// 2. Data Types
// ==========================

console.log("\n========== DATA TYPES ==========");

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

// ==========================
// 3. typeof
// ==========================

console.log("\n========== TYPEOF ==========");

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof money);
console.log(typeof city);

// ==========================
// 4. Arithmetic Operators
// ==========================

console.log("\n========== ARITHMETIC ==========");

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(10 ** 2);

// ==========================
// 5. Assignment Operators
// ==========================

console.log("\n========== ASSIGNMENT ==========");

let x = 10;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

// ==========================
// 6. Comparison Operators
// ==========================

console.log("\n========== COMPARISON ==========");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);

console.log(10 == "10");
console.log(10 === "10");

console.log(10 != 5);
console.log(10 !== "10");

// ==========================
// 7. Logical Operators
// ==========================

console.log("\n========== LOGICAL ==========");

let studentAge = 20;
let student = true;

console.log(studentAge >= 18 && student);
console.log(studentAge >= 18 || false);
console.log(!student);

// ==========================
// 8. if else
// ==========================

console.log("\n========== IF ELSE ==========");

let personAge = 17;

if (personAge >= 18) {
    console.log("Adult");
} else {
    console.log("Child");
}

// ==========================
// 9. else if
// ==========================

console.log("\n========== ELSE IF ==========");

let marks = 82;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else {
    console.log("Fail");
}

// ==========================
// 10. Ternary
// ==========================

console.log("\n========== TERNARY ==========");

let voteAge = 20;

console.log(voteAge >= 18 ? "Can Vote" : "Cannot Vote");

// ==========================
// 11. For Loop
// ==========================

console.log("\n========== FOR LOOP ==========");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ==========================
// 12. While Loop
// ==========================

console.log("\n========== WHILE LOOP ==========");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// ==========================
// 13. Do While
// ==========================

console.log("\n========== DO WHILE ==========");

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

// ==========================
// 14. Break
// ==========================

console.log("\n========== BREAK ==========");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// ==========================
// 15. Continue
// ==========================

console.log("\n========== CONTINUE ==========");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// ==========================
// 16. String
// ==========================

console.log("\n========== STRING ==========");

let text = " Hello JavaScript ";

console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 5));
console.log(text.includes("Java"));
console.log(text.startsWith(" "));
console.log(text.endsWith(" "));
console.log(text.split(" "));

// ==========================
// 17. Array
// ==========================

console.log("\n========== ARRAY ==========");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.includes("Apple"));
console.log(fruits.indexOf("Banana"));
console.log(fruits.join(" - "));
console.log(fruits.slice(1, 3));

let reversed = [...fruits].reverse();
console.log(reversed);

let sorted = [...fruits].sort();
console.log(sorted);

console.log("\nFor Of");

for (let fruit of fruits) {
    console.log(fruit);
}

// ==========================
// 18. Object
// ==========================

console.log("\n========== OBJECT ==========");

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

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("\nFor In");

for (let key in person) {
    console.log(key, ":", person[key]);
}

console.log("\nFor Of");

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}

// ==========================
// 19. Function
// ==========================

console.log("\n========== FUNCTION ==========");

function greet() {
    console.log("Hello Rumi");
}

greet();

// ==========================
// 20. Parameter
// ==========================

console.log("\n========== PARAMETER ==========");

function welcome(name) {
    console.log("Welcome", name);
}

welcome("Rumi");

// ==========================
// 21. Return
// ==========================

console.log("\n========== RETURN ==========");

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// ==========================
// 22. Function + Array
// ==========================

console.log("\n========== FUNCTION + ARRAY ==========");

function showFruits(arr) {
    console.log(arr);
}

showFruits(fruits);

// ==========================
// 23. Function + Object
// ==========================

console.log("\n========== FUNCTION + OBJECT ==========");

function showPerson(user) {
    console.log(user.name);
    console.log(user.age);
}

showPerson(person);

// ==========================
// 24. Scientific Number
// ==========================

console.log("\n========== SCIENTIFIC NUMBER ==========");

console.log(1e3);
console.log(1e6);
console.log(1e9);
console.log(1e12);
console.log(1e24);

// ==========================
// 25. Mini Practice
// ==========================

console.log("\n========== MINI PRACTICE ==========");

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let value of numbers) {
    sum += value;
}

console.log("Total =", sum);

// ==========================
// 26. Mini Object Project
// ==========================

console.log("\n========== MINI OBJECT PROJECT ==========");

const mobile = {
    brand: "Samsung",
    model: "S24",
    price: 1000,
    color: "Black"
};

console.log(mobile);

if (mobile.price >= 1000) {
    console.log("Premium Phone");
} else {
    console.log("Budget Phone");
}

// ==========================
// 27. Function Project
// ==========================

console.log("\n========== FUNCTION PROJECT ==========");

function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(20, 10);

console.log("Area =", area);

console.log("\n========== END OF REVISION ==========");