const assert = require('assert');
const {
  makePerson,
  getProperty,
  square,
  Rectangle,
  Circle,
  getAreas,
} = require('./lecture_2_javascript_foundations_ii');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  PASS  ${name}`);
    passed++;
  } catch (e) {
    console.log(`  FAIL  ${name}`);
    console.log(`        ${e.message}`);
    failed++;
  }
}

// --- 1) makePerson ---
console.log('\n1) makePerson');
test('returns an object with firstName', () => {
  const p = makePerson('Alice', 'Smith', 'Engineering');
  assert.strictEqual(p.firstName, 'Alice');
});
test('returns an object with lastName', () => {
  const p = makePerson('Alice', 'Smith', 'Engineering');
  assert.strictEqual(p.lastName, 'Smith');
});
test('returns an object with department', () => {
  const p = makePerson('Alice', 'Smith', 'Engineering');
  assert.strictEqual(p.department, 'Engineering');
});

// --- 2) getProperty ---
console.log('\n2) getProperty');
test('retrieves a string property via bracket notation', () => {
  assert.strictEqual(getProperty({ color: 'red' }, 'color'), 'red');
});
test('retrieves a numeric property', () => {
  assert.strictEqual(getProperty({ count: 42 }, 'count'), 42);
});
test('returns undefined for missing key', () => {
  assert.strictEqual(getProperty({}, 'missing'), undefined);
});

// --- 3) square (arrow function) ---
console.log('\n3) square');
test('square(0) === 0', () => assert.strictEqual(square(0), 0));
test('square(3) === 9', () => assert.strictEqual(square(3), 9));
test('square(-4) === 16', () => assert.strictEqual(square(-4), 16));
test('square(1.5) === 2.25', () => assert.strictEqual(square(1.5), 2.25));

// --- 4) Rectangle ---
console.log('\n4) Rectangle.area()');
test('3 x 4 rectangle has area 12', () => {
  const r = new Rectangle(0, 0, 3, 4);
  assert.strictEqual(r.area(), 12);
});
test('1 x 1 rectangle has area 1', () => {
  const r = new Rectangle(0, 0, 1, 1);
  assert.strictEqual(r.area(), 1);
});

console.log('\n4) Circle.area()');
test('circle radius 1 area ≈ π', () => {
  const c = new Circle(0, 0, 1);
  assert.ok(
    Math.abs(c.area() - Math.PI) < 1e-9,
    `Expected ~${Math.PI}, got ${c.area()}`
  );
});
test('circle radius 5 area ≈ 78.539...', () => {
  const c = new Circle(0, 0, 5);
  assert.ok(
    Math.abs(c.area() - Math.PI * 25) < 1e-9,
    `Expected ~${Math.PI * 25}, got ${c.area()}`
  );
});

// --- 5) getAreas ---
console.log('\n5) getAreas');
test('returns array of areas for mixed shapes', () => {
  const shapes = [new Rectangle(0, 0, 2, 5), new Circle(0, 0, 3)];
  const areas = getAreas(shapes);
  assert.strictEqual(areas[0], 10);
  assert.ok(Math.abs(areas[1] - Math.PI * 9) < 1e-9);
});
test('returns empty array for empty input', () => {
  assert.deepStrictEqual(getAreas([]), []);
});

// --- Summary ---
console.log(`\n${'─'.repeat(40)}`);
console.log(`  ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
