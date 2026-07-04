/*
Lecture 3-1: Promises
Topics:
- creating promises
- resolving and rejecting
- chaining with then/catch
- Promise.all

Instructions:
Complete each TODO. Do not change function names.
*/

// 1) Return a promise that resolves with value * 2 after delayMs.
function doubleAfterDelay(value, delayMs) {
  // TODO
}

// 2) Return a promise that rejects with Error('Negative value') if n < 0.
// Otherwise resolve with Math.sqrt(n).
function safeSqrt(n) {
  // TODO
}

// 3) Chain promises to transform a username.
// Start from Promise.resolve(name), trim it, lowercase it, then append '@mcmaster.ca'.
function buildSchoolEmail(name) {
  // TODO
}

// 4) Given an array of promise-returning functions, run them all and return Promise.all(...)
function runAll(tasks) {
  // TODO
}

module.exports = {
  doubleAfterDelay,
  safeSqrt,
  buildSchoolEmail,
  runAll,
};
