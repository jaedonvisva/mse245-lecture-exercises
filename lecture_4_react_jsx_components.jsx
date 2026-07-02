/*
Lecture 4: React JSX and Components
Topics seen in the lecture deck:
- React JSX
- more than one React component
- arrow functions in components

Instructions:
Complete each TODO.
*/

import React from 'react';

// 1) Create a Title component that renders an h1.
export function Title(props) {
  // TODO
}

// 2) Create a CourseCard component that shows title and difficulty.
export function CourseCard(props) {
  // TODO
}

// 3) Create a CourseList component that renders multiple CourseCard components.
export function CourseList(props) {
  // TODO
}

// 4) Use an arrow function and map() to render a list of tags.
export function TagList(props) {
  // TODO
}

// 5) Create a page-level App component using the above components.
export default function App() {
  const courses = [
    { id: 1, title: 'HTTP Basics', difficulty: 'Easy' },
    { id: 2, title: 'JavaScript Objects', difficulty: 'Medium' },
    { id: 3, title: 'React State', difficulty: 'Medium' },
  ];

  // TODO
}
