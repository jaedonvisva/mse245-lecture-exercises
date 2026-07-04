/*
Lecture 3-3: Promise Composition and Error Handling
Topics:
- chaining dependent async steps
- transforming resolved values
- catching and recovering from errors
- final cleanup logic

Instructions:
Complete each TODO. Do not change function names.
*/

// 1) Chain two async transforms.
// getNumber resolves to a number.
// First add 5, then multiply by 3.
function transformNumber(getNumber) {
  // TODO
}

// 2) Recover from failure.
// If task rejects, resolve with the fallback value instead.
function recover(task, fallbackValue) {
  // TODO
}

// 3) Run cleanup no matter what.
// cleanup is a function that should run whether task resolves or rejects.
function withCleanup(task, cleanup) {
  // TODO
}

module.exports = {
  transformNumber,
  recover,
  withCleanup,
};
