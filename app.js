console.log("Hello Dan");

function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}

sayHelloTo("Dan");
sayHelloTo("Dave");

function greet(greeting, name) {
  console.log(greeting + " " + name + "!");
}

greet("Good morning", "Dan");

function add(a, b) {
  return a + b;
}

const result = add(2, 4);
console.log("The result is", result);

const anotherResult = add(5, 10);
console.log("Another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}

const theResult = multiply(2, 5);
console.log("Now we get", theResult);

function subtract(a, b) {
  return a - b;
}

const moreResults = subtract(6, 3);
console.log("The next result is", moreResults);

function divide(a, b) {
  return a / b;
}

const division = divide(10, 5);
console.log("Now we have", division);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

console.log("Hopefully we now get", calculate(2, 5, "+"));

const aNewResult = calculate(2, 5, "+");
console.log("This should also be", aNewResult);

const lastResult = calculate(2, 5, "*");
console.log("Finally we get", lastResult);
