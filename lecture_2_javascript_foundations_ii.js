/*
Lecture 2: JavaScript Foundations II
Topics seen in the lecture deck:
- installing Node.js
- objects
- classes / inheritance / polymorphism
- arrow functions

Instructions:
Complete each TODO.
*/

// 1) Create and return a person object.
// Use keys: firstName, lastName, department
function makePerson(firstName, lastName, department) {
  // TODO
}

// 2) Return a property using bracket notation.
function getProperty(obj, key) {
  // TODO
}

// 3) Convert this function into an arrow function by completing the body.
const square = (n) => {
  // TODO
};

// 4) Create a base Shape class and two subclasses: Rectangle and Circle.
// Each subclass should implement area().
class Shape {
  constructor(x, y) {
    // TODO
  }

  area() {
    throw new Error('Not implemented');
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    // TODO
  }

  area() {
    // TODO
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    // TODO
  }

  area() {
    // TODO
  }
}

// 5) Demonstrate polymorphism by returning the areas of all shapes.
function getAreas(shapes) {
  // TODO
}

module.exports = {
  makePerson,
  getProperty,
  square,
  Shape,
  Rectangle,
  Circle,
  getAreas,
};
