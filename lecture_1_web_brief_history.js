/*
Lecture 1: The Web: A Brief History
Topics seen in the lecture deck:
- static sites
- web 2.0
- single-page applications
- frontend/backend/API/HTTP/JSON/database roles
- CRUD and HTTP methods

Instructions:
Complete each TODO. Keep the function names unchanged.
*/

// 1) Return the era label for a given year.
// 1990-1999 => "static"
// 2000-2009 => "web2"
// 2010-2019 => "spa"
// 2020+ => "fullstack"
function classifyWebEra(year) {
  // TODO
}

// 2) Map CRUD actions to HTTP methods.
// create -> POST, read -> GET, update -> PUT, delete -> DELETE
function crudToHttp(action) {
  // TODO
}

// 3) Given a request object, identify client and server roles.
// Return: { client: string, server: string }
function identifyRoles(requester, responder) {
  // TODO
}

// 4) Convert a simple JS object into a JSON string.
function toJson(data) {
  // TODO
}

// 5) Describe app layers using the restaurant analogy.
// Return an object with keys: frontend, backend, api, database
function restaurantAnalogy() {
  // TODO
}

// 6) Bonus: decide whether a page behavior sounds like a static site or SPA.
// Example inputs:
// "full page reload on every click" -> "static"
// "updates content without reloading" -> "spa"
function detectArchitecture(description) {
  // TODO
}

module.exports = {
  classifyWebEra,
  crudToHttp,
  identifyRoles,
  toJson,
  restaurantAnalogy,
  detectArchitecture,
};
