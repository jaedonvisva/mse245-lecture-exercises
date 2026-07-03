const assert = require('assert');
const {
  classifyWebEra,
  crudToHttp,
  identifyRoles,
  toJson,
  restaurantAnalogy,
  detectArchitecture,
} = require('./lecture_1_web_brief_history');

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

// --- 1) classifyWebEra ---
console.log('\n1) classifyWebEra');
test('1990 => "static"',    () => assert.strictEqual(classifyWebEra(1990), 'static'));
test('1999 => "static"',    () => assert.strictEqual(classifyWebEra(1999), 'static'));
test('2000 => "web2"',      () => assert.strictEqual(classifyWebEra(2000), 'web2'));
test('2009 => "web2"',      () => assert.strictEqual(classifyWebEra(2009), 'web2'));
test('2010 => "spa"',       () => assert.strictEqual(classifyWebEra(2010), 'spa'));
test('2019 => "spa"',       () => assert.strictEqual(classifyWebEra(2019), 'spa'));
test('2020 => "fullstack"', () => assert.strictEqual(classifyWebEra(2020), 'fullstack'));
test('2026 => "fullstack"', () => assert.strictEqual(classifyWebEra(2026), 'fullstack'));

// --- 2) crudToHttp ---
console.log('\n2) crudToHttp');
test('create => POST',  () => assert.strictEqual(crudToHttp('create'), 'POST'));
test('read   => GET',   () => assert.strictEqual(crudToHttp('read'),   'GET'));
test('update => PUT',   () => assert.strictEqual(crudToHttp('update'), 'PUT'));
test('delete => DELETE',() => assert.strictEqual(crudToHttp('delete'), 'DELETE'));

// --- 3) identifyRoles ---
console.log('\n3) identifyRoles');
test('returns object with client and server keys', () => {
  const result = identifyRoles('browser', 'api-server');
  assert.ok(typeof result === 'object' && result !== null, 'must return object');
  assert.strictEqual(result.client, 'browser');
  assert.strictEqual(result.server, 'api-server');
});

// --- 4) toJson ---
console.log('\n4) toJson');
test('converts object to JSON string', () => {
  const obj = { name: 'Alice', age: 30 };
  const result = toJson(obj);
  assert.strictEqual(typeof result, 'string');
  assert.deepStrictEqual(JSON.parse(result), obj);
});
test('converts array to JSON string', () => {
  const arr = [1, 2, 3];
  const result = toJson(arr);
  assert.deepStrictEqual(JSON.parse(result), arr);
});

// --- 5) restaurantAnalogy ---
console.log('\n5) restaurantAnalogy');
test('returns object with frontend, backend, api, database keys', () => {
  const r = restaurantAnalogy();
  assert.ok(typeof r === 'object' && r !== null);
  assert.ok('frontend'  in r, 'missing frontend');
  assert.ok('backend'   in r, 'missing backend');
  assert.ok('api'       in r, 'missing api');
  assert.ok('database'  in r, 'missing database');
});
test('all values are non-empty strings', () => {
  const r = restaurantAnalogy();
  for (const key of ['frontend', 'backend', 'api', 'database']) {
    assert.ok(typeof r[key] === 'string' && r[key].length > 0,
      `${key} should be a non-empty string`);
  }
});

// --- 6) detectArchitecture ---
console.log('\n6) detectArchitecture');
test('"full page reload on every click" => "static"', () => {
  assert.strictEqual(detectArchitecture('full page reload on every click'), 'static');
});
test('"updates content without reloading" => "spa"', () => {
  assert.strictEqual(detectArchitecture('updates content without reloading'), 'spa');
});

// --- Summary ---
console.log(`\n${'─'.repeat(40)}`);
console.log(`  ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
