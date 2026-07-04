/*
Lecture 3-2: async/await
Topics:
- async functions
- await
- try/catch with async code
- sequencing async tasks

Instructions:
Complete each TODO. Do not change function names.
*/

// Helper provided for testing
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 1) Use async/await to wait, then return n + 1.
async function incrementLater(n, ms) {
  // TODO
}

// 2) Await two promise-returning functions in sequence and return their sum.
async function addSequentially(getA, getB) {
  // TODO
}

// 3) Catch async errors and return the fallback string 'FAILED'.
async function withFallback(task) {
  // TODO
}

// 4) Fetch simulated user data with async/await.
// getUser returns a promise that resolves to { id, name }.
// Return the uppercase name.
async function getUppercaseUserName(getUser) {
  // TODO
}

module.exports = {
  wait,
  incrementLater,
  addSequentially,
  withFallback,
  getUppercaseUserName,
};
