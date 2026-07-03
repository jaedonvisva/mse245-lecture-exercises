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
  return {
    firstName: firstName,
    lastName: lastName,
    department: department
  }
}

// 2) Return a property using bracket notation.
function getProperty(obj, key) {
  return obj[key]
}

// 3) Convert this function into an arrow function by completing the body.
const square = (n) => {
  return n ** 2
};

// 4) Create a base Shape class and two subclasses: Rectangle and Circle.
// Each subclass should implement area().
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    throw new Error('Not implemented');
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y)
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y)
    this.radius = radius
  }

  area() {
    return Math.PI * (this.radius ** 2)
  }
}

// 5) Demonstrate polymorphism by returning the areas of all shapes.
function getAreas(shapes) {
  return shapes.map(shape => shape.area())
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
