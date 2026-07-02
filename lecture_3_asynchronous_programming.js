/*
Lecture 3: Asynchronous Programming
Topics seen in the lecture deck:
- callbacks
- handling errors in callbacks
- early return style

Instructions:
Complete each TODO.
*/

const fs = require('fs');

// 1) Read a file using a callback and return its contents through the callback.
// Use Node-style callback: callback(error, data)
function readTextFile(path, callback) {
  // TODO
}

// 2) Parse JSON safely inside a callback-style workflow.
function parseJsonString(jsonString, callback) {
  // TODO
}

// 3) Validate a number asynchronously.
// If input is not a number, callback with an Error.
// Otherwise callback with double the number.
function doubleAsync(value, callback) {
  // TODO
}

// 4) Prefer early return: complete this function so it stops on error.
function processUser(user, callback) {
  // TODO: if user is missing, callback with Error('User required')
  // TODO: if user.name is missing, callback with Error('Name required')
  // TODO: otherwise callback(null, user.name.toUpperCase())
}

module.exports = {
  readTextFile,
  parseJsonString,
  doubleAsync,
  processUser,
};
